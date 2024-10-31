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
    using_donor character varying,
    selected_fertility_issues character varying,
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
11	14	{"IVF"}	{"Known Donor"}	\N	1 year	\N	2024-10-22 18:02:41.52337-07	\N	Female	Male	true	false	\N
13	15	{"IVF"}	{"Known Donor"}	\N	6 months	\N	2024-10-22 18:46:09.595299-07	\N	Male	Female	true	false	\N
37	11	{"Timed-Intercourse"}	\N	\N	1 year	\N	2024-10-29 12:12:29.798274-07	\N	Female	Male	false	unsure	{\n    "title": "Family Planning Checklist: Timed-Intercourse with Not Specified (1 year)",\n    "timeline": "1 year",\n    "steps": [\n        {\n            "title": "Research and Education",\n            "timeframe": "0-1 month",\n            "sub_steps": [\n                "Research fertility clinics and resources in CA",\n                "Learn about timed-intercourse and success rates",\n                "Discuss family planning options and goals with partner"\n            ]\n        },\n        {\n            "title": "Consultation with Healthcare Provider",\n            "timeframe": "1-2 months",\n            "sub_steps": [\n                "Schedule an appointment with a fertility specialist",\n                "Discuss potential fertility issues and testing options",\n                "Evaluate necessity for donor based on fertility assessment"\n            ]\n        },\n        {\n            "title": "Medical Evaluation",\n            "timeframe": "2-3 months",\n            "sub_steps": [\n                "Undergo a comprehensive fertility assessment",\n                "Partner to undergo a semen analysis",\n                "Determine possible need for medical interventions"\n            ]\n        },\n        {\n            "title": "Legal and Donor Considerations",\n            "timeframe": "3-4 months",\n            "sub_steps": [\n                "Research legal implications and rights in CA",\n                "If using a donor, discuss preferences and options",\n                "Consult with a legal advisor on donor agreements"\n            ]\n        },\n        {\n            "title": "Develop Fertility Plan",\n            "timeframe": "4-5 months",\n            "sub_steps": [\n                "Finalize decision on whether to use a donor",\n                "Create a detailed plan with the fertility clinic",\n                "Schedule future appointments and treatments"\n            ]\n        },\n        {\n            "title": "Implement Timed-Intercourse Attempts",\n            "timeframe": "5-12 months",\n            "sub_steps": [\n                "Monitor ovulation and fertility signals regularly",\n                "Follow the fertility plan developed with the clinic",\n                "Maintain open communication with healthcare provider"\n            ]\n        }\n    ]\n}
38	13	{"Gestational Surrogacy"}	{"Anonymous Donor"}	\N	1 year	\N	2024-10-29 12:20:43.164115-07	\N	Male	Male	true	false	{\n    "title": "Family Planning Checklist: Gestational Surrogacy with Anonymous Donor (1 year)",\n    "timeline": "1 year",\n    "steps": [\n        {\n            "title": "Research and Choose Fertility Clinic",\n            "timeframe": "0-1 Month",\n            "sub_steps": [\n                "Research fertility clinics in CA specializing in gestational surrogacy.",\n                "Consult with clinics to understand their processes, success rates, and costs.",\n                "Select a clinic that meets your needs and preferences."\n            ]\n        },\n        {\n            "title": "Consult with Legal Advisor",\n            "timeframe": "0-2 Months",\n            "sub_steps": [\n                "Schedule a meeting with a legal advisor experienced in surrogacy laws in CA.",\n                "Understand the legal implications, contracts, and parental rights.",\n                "Draft or review surrogacy agreements."\n            ]\n        },\n        {\n            "title": "Identify and Screen Anonymous Donor",\n            "timeframe": "1-3 Months",\n            "sub_steps": [\n                "Work with the clinic to find a suitable anonymous sperm donor.",\n                "Review donor profiles and choose a donor that fits your requirements.",\n                "Ensure proper screening and testing of the donor by the clinic."\n            ]\n        },\n        {\n            "title": "Medical Evaluation",\n            "timeframe": "2-4 Months",\n            "sub_steps": [\n                "Complete comprehensive health screenings for both partners.",\n                "Undergo any necessary fertility assessments and tests.",\n                "Ensure the gestational carrier's health and readiness are evaluated."\n            ]\n        },\n        {\n            "title": "Begin Fertilization Process",\n            "timeframe": "4-6 Months",\n            "sub_steps": [\n                "Initiate the in vitro fertilization (IVF) process with the selected donor(s).",\n                "Monitor the development of embryos and select the best for transfer.",\n                "Plan the timing and procedure for embryo transfer."\n            ]\n        },\n        {\n            "title": "Embryo Transfer",\n            "timeframe": "6-8 Months",\n            "sub_steps": [\n                "Proceed with embryo transfer to the gestational carrier.",\n                "Monitor the carrier's health and conduct pregnancy tests.",\n                "Ensure support and medical attention through the early pregnancy stages."\n            ]\n        },\n        {\n            "title": "Pregnancy and Birth Plan",\n            "timeframe": "8-12 Months",\n            "sub_steps": [\n                "Develop a comprehensive birth plan with your gestational carrier.",\n                "Maintain regular check-ups and support during the pregnancy.",\n                "Prepare for the birth and ensure legal documents are in order."\n            ]\n        },\n        {\n            "title": "Post-Birth Legal Formalities",\n            "timeframe": "Upon Birth",\n            "sub_steps": [\n                "Complete all necessary legal documents for parental rights.",\n                "Ensure the birth certificate reflects intended parentage.",\n                "Arrange for any post-birth medical care or support needed."\n            ]\n        }\n    ]\n}
39	12	{"Reciprocal IVF"}	{"Anonymous Donor"}	\N	1 year	\N	2024-10-29 17:38:24.909-07	\N	Female	Female	true	false	{\n    "title": "Family Planning Checklist: Reciprocal IVF with Anonymous Donor (1 year)",\n    "timeline": "1 year",\n    "steps": [\n        {\n            "title": "Research and Choose Fertility Clinic",\n            "timeframe": "0-2 Months",\n            "sub_steps": [\n                "Identify clinics that specialize in Reciprocal IVF in IL",\n                "Check clinic success rates and reviews",\n                "Consult with LGBTQ+ friendly clinics"\n            ]\n        },\n        {\n            "title": "Medical Evaluation",\n            "timeframe": "2-3 Months",\n            "sub_steps": [\n                "Schedule medical evaluations for both partners",\n                "Assess reproductive health and understand potential challenges",\n                "Discuss options with a fertility specialist"\n            ]\n        },\n        {\n            "title": "Choose an Anonymous Donor",\n            "timeframe": "3-4 Months",\n            "sub_steps": [\n                "Research anonymous donor options through sperm banks",\n                "Select donor based on desired characteristics",\n                "Finalize donor selection through clinic or bank"\n            ]\n        },\n        {\n            "title": "Legal Consultation and Arrangements",\n            "timeframe": "4-5 Months",\n            "sub_steps": [\n                "Consult with a legal expert on parentage and donor agreements",\n                "Understand legal rights and considerations in IL",\n                "Prepare necessary legal documents"\n            ]\n        },\n        {\n            "title": "Financial Planning",\n            "timeframe": "4-5 Months",\n            "sub_steps": [\n                "Outline fertility treatment costs and potential financial aid",\n                "Explore insurance coverage options",\n                "Plan a budget for the entire family planning process"\n            ]\n        },\n        {\n            "title": "Initiate Reciprocal IVF Process",\n            "timeframe": "5-8 Months",\n            "sub_steps": [\n                "Begin egg retrieval process for one partner",\n                "Fertilization using selected donor sperm",\n                "Prepare for embryo transfer to the partner carrying the pregnancy"\n            ]\n        },\n        {\n            "title": "Pregnancy and Prenatal Care",\n            "timeframe": "8-12 Months",\n            "sub_steps": [\n                "Establish prenatal care with a healthcare provider",\n                "Attend regular check-ups and monitoring",\n                "Prepare for the arrival of the child and arrange parenting resources"\n            ]\n        }\n    ]\n}
40	8	{"IUI"}	{"Known Donor"}	\N	1 year	\N	2024-10-31 09:05:44.401215-07	\N	Female	\N	true	false	{\n    "title": "Family Planning Checklist: IUI with Known Donor (1 year)",\n    "timeline": "1 year",\n    "steps": [\n        {\n            "title": "Research and Choose Fertility Clinic",\n            "timeframe": "0-1 Month",\n            "sub_steps": [\n                "Identify clinics in PA that offer IUI services.",\n                "Consult online reviews and LGBTQ+ community recommendations.",\n                "Schedule consultation appointments with potential clinics."\n            ]\n        },\n        {\n            "title": "Medical Evaluation",\n            "timeframe": "0-2 Months",\n            "sub_steps": [\n                "Complete a comprehensive health and fertility assessment.",\n                "Discuss any known health concerns with a healthcare provider.",\n                "Confirm readiness for conception with a physician."\n            ]\n        },\n        {\n            "title": "Legal Consultations",\n            "timeframe": "1-3 Months",\n            "sub_steps": [\n                "Consult with a family lawyer about known donor agreements.",\n                "Draft and review legal agreements regarding donor rights and responsibilities.",\n                "Understand the legal implications of using a known donor in PA."\n            ]\n        },\n        {\n            "title": "Donor Coordination",\n            "timeframe": "3-5 Months",\n            "sub_steps": [\n                "Discuss and approve donor availability with the chosen clinic.",\n                "Finalize donor screening and health tests.",\n                "Ensure donor legal agreements are finalized."\n            ]\n        },\n        {\n            "title": "Financial Planning",\n            "timeframe": "2-4 Months",\n            "sub_steps": [\n                "Review insurance coverage for fertility treatments.",\n                "Explore financing options or budgeting for IUI costs.",\n                "Set aside funds for unexpected expenses during the process."\n            ]\n        },\n        {\n            "title": "Lifestyle Adjustments",\n            "timeframe": "4-6 Months",\n            "sub_steps": [\n                "Adopt a health-conscious diet and exercise routine.",\n                "Limit exposure to harmful substances and environments.",\n                "Begin prenatal vitamins as recommended by a doctor."\n            ]\n        },\n        {\n            "title": "IUI Procedure Scheduling",\n            "timeframe": "5-10 Months",\n            "sub_steps": [\n                "Monitor ovulation cycles in coordination with the clinic.",\n                "Plan and prepare for the IUI procedure with the donor.",\n                "Prepare for possible multiple cycles to achieve pregnancy."\n            ]\n        },\n        {\n            "title": "Emotional and Support Planning",\n            "timeframe": "5-12 Months",\n            "sub_steps": [\n                "Connect with support groups for individuals using known donors.",\n                "Consider counseling or therapy for emotional readiness.",\n                "Maintain regular check-ins with partner or support network."\n            ]\n        }\n    ]\n}
41	10	{"Reciprocal IVF"}	{"Anonymous Donor"}	\N	6 months	\N	2024-10-31 09:06:44.434535-07	\N	Female	Female	true	unsure	{\n    "title": "Family Planning Checklist: Reciprocal IVF with Anonymous Donor (6 months)",\n    "timeline": "6 months",\n    "steps": [\n        {\n            "title": "Research and Choose Fertility Clinic",\n            "timeframe": "0-1 Month",\n            "sub_steps": [\n                "Identify fertility clinics that offer Reciprocal IVF in Alabama.",\n                "Check reviews and success rates of the clinics.",\n                "Schedule initial consultations."\n            ]\n        },\n        {\n            "title": "Medical Evaluation",\n            "timeframe": "0-2 Months",\n            "sub_steps": [\n                "Complete health assessments for both partners.",\n                "Discuss any potential fertility issues with the doctor.",\n                "Lab tests and ultrasound for ovarian reserve and overall health."\n            ]\n        },\n        {\n            "title": "Legal and Financial Consultation",\n            "timeframe": "1-2 Months",\n            "sub_steps": [\n                "Consult with a lawyer specializing in family and fertility law.",\n                "Discuss legal aspects of using an anonymous donor.",\n                "Outline a budget and explore insurance coverage possibilities."\n            ]\n        },\n        {\n            "title": "Select Anonymous Donor",\n            "timeframe": "2-3 Months",\n            "sub_steps": [\n                "Review anonymous donor profiles available through your chosen clinic or sperm bank.",\n                "Discuss donor preferences and choose the donor.",\n                "Complete necessary paperwork for donor selection."\n            ]\n        },\n        {\n            "title": "Begin Hormonal Preparations",\n            "timeframe": "3-4 Months",\n            "sub_steps": [\n                "Follow a hormonal treatment plan as outlined by the fertility specialist.",\n                "Track ovulation cycle readiness for both partners.",\n                "Regularly attend monitoring appointments."\n            ]\n        },\n        {\n            "title": "Embryo Creation and Transfer",\n            "timeframe": "4-5 Months",\n            "sub_steps": [\n                "Egg retrieval post-ovulation stimulation.",\n                "Fertilization using donor sperm and embryo development.",\n                "Schedule the embryo transfer for the partner carrying the pregnancy."\n            ]\n        },\n        {\n            "title": "Plan Prenatal Care",\n            "timeframe": "5-6 Months",\n            "sub_steps": [\n                "Choose a prenatal care provider and schedule initial appointments.",\n                "Discuss prenatal care plans and birth preferences.",\n                "Prepare for any additional support or resources needed during pregnancy."\n            ]\n        }\n    ]\n}
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
12	6test@test.com	$2b$10$WWVBuhT5vbjAYPsViRP/LOhT0fg07x1k/3TGwc16OsD57Oem4BTAK	IL	xe/xir/xirs	Couple (one partner able to carry a pregnancy)	2024-10-19 17:17:38.863076-07	Grey	48	t	Perriwinkle	she/her/hers	37
\.


--
-- Name: conception_plan_plan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.conception_plan_plan_id_seq', 41, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.users_user_id_seq', 30, true);


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

