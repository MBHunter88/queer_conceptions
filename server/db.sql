--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Homebrew)
-- Dumped by pg_dump version 14.12 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: conception_plan; Type: TABLE; Schema: public; Owner: mj
--

CREATE TABLE public.conception_plan (
    plan_id integer NOT NULL,
    user_id integer,
    method_choice character varying,
    donor_preference character varying,
    known_fertility_issues character varying,
    timeline character varying,
    status character varying,
    date_created timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    budget int4range,
    sex_at_birth character varying,
    partner_sex_at_birth character varying,
    using_donor boolean,
    selected_fertility_issues boolean,
    generated_plan json
);


ALTER TABLE public.conception_plan OWNER TO mj;

--
-- Name: conception_plan_plan_id_seq; Type: SEQUENCE; Schema: public; Owner: mj
--

CREATE SEQUENCE public.conception_plan_plan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conception_plan_plan_id_seq OWNER TO mj;

--
-- Name: conception_plan_plan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mj
--

ALTER SEQUENCE public.conception_plan_plan_id_seq OWNED BY public.conception_plan.plan_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: mj
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    email character varying NOT NULL,
    password character varying,
    location character varying,
    pronouns character varying,
    family_structure character varying,
    date_created timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    name character varying,
    age integer,
    has_partner boolean,
    partner_name character varying,
    partner_pronouns character varying,
    partner_age integer
);


ALTER TABLE public.users OWNER TO mj;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: mj
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO mj;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mj
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: conception_plan plan_id; Type: DEFAULT; Schema: public; Owner: mj
--

ALTER TABLE ONLY public.conception_plan ALTER COLUMN plan_id SET DEFAULT nextval('public.conception_plan_plan_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: mj
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: conception_plan; Type: TABLE DATA; Schema: public; Owner: mj
--

COPY public.conception_plan (plan_id, user_id, method_choice, donor_preference, known_fertility_issues, timeline, status, date_created, budget, sex_at_birth, partner_sex_at_birth, using_donor, selected_fertility_issues, generated_plan) FROM stdin;
5	12	{"IVF"}	{"Anonymous"}	\N	1 year	\N	2024-10-22 14:57:53.546844-07	\N	\N	\N	\N	\N	\N
6	11	{"Gestational Surrogacy"}	{"Known Donor"}	\N	6 months	\N	2024-10-22 15:47:35.504105-07	\N	\N	\N	\N	\N	\N
7	8	{"Traditional Surrogacy"}	{"Known Donor"}	\N	2 years	\N	2024-10-22 16:05:54.020727-07	\N	\N	\N	\N	\N	\N
11	14	{"IVF"}	{"Known Donor"}	\N	1 year	\N	2024-10-22 18:02:41.52337-07	\N	Female	Male	t	f	\N
13	15	{"IVF"}	{"Known Donor"}	\N	6 months	\N	2024-10-22 18:46:09.595299-07	\N	Male	Female	t	f	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mj
--

COPY public.users (user_id, email, password, location, pronouns, family_structure, date_created, name, age, has_partner, partner_name, partner_pronouns, partner_age) FROM stdin;
8	3test@test.com	$2b$10$AOXshz0UjZs/79z9javvquA3wGckJbxUBUI0xNxKigcsDEu.iFmHu	PA	she/they	Single, able to carry	2024-10-18 23:34:28.209263-07	Green	35	f	\N	\N	\N
10	4test@test.com	$2b$10$jPrlAuP4/OdfyTXrjuBlBufV8RUOwI9SXajt5KrOG36aZRJBybQxu	AL	she/her	Couple (both partners able to carry a pregnancy)	2024-10-18 23:39:47.201415-07	Red	31	t	Purple	she/her	33
11	5test@test.com	$2b$10$wcv2FGnvPwdGlttv1aB4T.BTNnMzzOvIRU2QdO8PFg0qD3X1gST/W	CA	she/they	Couple (neither partner able to carry a pregnancy)	2024-10-19 13:22:12.134-07	Blue	28	t	Yellow	he/him	26
13	7test@test.com	$2b$10$b54FpCTxVldAk5K1NdLynO3JORcit7WOEfnB2zYAfrvV8islq4Aoa	CA	he/him/his	Couple (one partner is willing and/or able to be gestational carrier)	2024-10-22 17:41:51.858732-07	Orange	40	t	Brown	they/them/theirs	32
14	8test@test.com	$2b$10$lcHBHCoPImB5kxnUrVqcMOw5WjOrvsxez.rhdTW2m07phmmMLnJui	NY	they/them/theirs	Both partners are willing and/or able to be gestational carrier	2024-10-22 17:45:52.597889-07	Mauve	27	t	Cerulean	they/them/theirs	22
15	9test@test.com	$2b$10$33qZEp0BozTClOX62DW/DuEltHqHtIy9n23N6..MX0U3fgV1HtD92	OR	xe/xir/xirs	Couple (one partner is willing and/or able to be gestational carrier)	2024-10-22 17:49:48.074348-07	Ran Out of Colors	25	t	Color	she/her/hers	26
12	6test@test.com	$2b$10$WWVBuhT5vbjAYPsViRP/LOhT0fg07x1k/3TGwc16OsD57Oem4BTAK	IL	xe/xir/xirs	Couple (one partner able to carry a pregnancy)	2024-10-19 17:17:38.863076-07	Grey	50	t	Perriwinkle	she/her/hers	37
\.


--
-- Name: conception_plan_plan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.conception_plan_plan_id_seq', 34, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.users_user_id_seq', 16, true);


--
-- Name: conception_plan conception_plan_pkey; Type: CONSTRAINT; Schema: public; Owner: mj
--

ALTER TABLE ONLY public.conception_plan
    ADD CONSTRAINT conception_plan_pkey PRIMARY KEY (plan_id);


--
-- Name: users email; Type: CONSTRAINT; Schema: public; Owner: mj
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT email UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: mj
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: conception_plan user_id; Type: FK CONSTRAINT; Schema: public; Owner: mj
--

ALTER TABLE ONLY public.conception_plan
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

