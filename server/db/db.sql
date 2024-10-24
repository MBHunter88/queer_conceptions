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
    generated_plan text,
    status character varying,
    date_created timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    selected_fertility_issue character varying,
    budget int4range
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

COPY public.conception_plan (plan_id, user_id, method_choice, donor_preference, known_fertility_issues, timeline, generated_plan, status, date_created, selected_fertility_issue, budget) FROM stdin;
1	1	IVF	sperm bank	n/a	1 year	\N	\N	2024-10-14 09:24:26.300056-07	\N	\N
2	1	IVF	sperm bank	n/a	1 year	Creating a family plan for a queer couple in California using IVF with a gestational carrier and donor sperm involves several steps. Here's a suggested plan to guide you through the process while considering your timeline of one year.\n\n### Initial Steps (Month 1-2):\n\n1. **Consult with an Experienced Fertility Specialist**: \n   - Start by scheduling consultations with a few fertility clinics that have experience in LGBTQ+ family planning. Look for those that specifically mention services for queer couples and gestational carriers.\n   - Discuss your specific family goals, IVF process, and any questions you might have regarding the use of a gestational carrier and sperm donor.\n\n2. **Legal Consultations**:\n   - Engage with a lawyer specializing in reproductive and family law in California to understand your rights and obligations, including drafting agreements for the gestational carrier and securing the sperm donor’s legal information.\n   - Review California laws on gestational surrogacy to ensure compliance and protection for all parties involved.\n\n3. **Initial Medical Tests and Evaluations**:\n   - Both you and your partner should undergo basic fertility assessments, even if there are no known issues, to ensure you choose the best possible path for IVF.\n   - The potential gestational carrier should also complete a comprehensive medical evaluation to confirm her ability to carry a pregnancy safely.\n\n### Donor Selection (Month 3):\n\n4. **Select a Sperm Donor**:\n   - Register with a reputable sperm bank. Make use of their search features to find a donor that matches your desired criteria (physical traits, medical history, etc.).\n   - Consider whether you want an anonymous or known donor, as this can impact the legal considerations later.\n\n5. **Complete Psychological Evaluations**:\n   - Typically, clinics require psychological evaluations for intended parents and gestational carriers. This helps ensure everyone is mentally and emotionally prepared for the process.\n\n### IVF and Embryo Transfer Preparation (Month 4-7):\n\n6. **Start IVF Process**:\n   - Begin ovarian stimulation for you or your partner to retrieve eggs. This involves using medication to stimulate the ovaries to produce multiple eggs.\n   - Once eggs are mature, they will be retrieved and fertilized with the selected donor sperm to create embryos.\n\n7. **Embryo Screening (if desired)**:\n   - Decide whether you want additional embryo screening for genetic conditions (PGD/PGS) before the transfer.\n\n8. **Coordinate with Gestational Carrier**:\n   - Prepare the gestational carrier for the embryo transfer with appropriate medications to synchronize her cycle with the IVF schedule.\n\n### Embryo Transfer and Pregnancy (Month 8-12):\n\n9. **Embryo Transfer**:\n   - Once the carrier’s body is prepared, an embryo (or embryos) will be transferred to her uterus. This is followed by a waiting period of about 10 days to confirm pregnancy via blood tests.\n\n10. **Monitor Pregnancy**:\n   - Follow the gestational carrier closely with regular prenatal visits to ensure everything is progressing healthily.\n   - Maintain open communication and support with the gestational carrier throughout the pregnancy.\n\n### Ongoing Plans:\n\n11. **Finalize Legal Arrangements**:\n   - Make sure to finalize any remaining legal documentation, such as parental rights and birth certificates, as per California’s regulations.\n\n12. **Prepare for Parenthood**:\n   - Use this waiting period to make preparations for the arrival of your baby, such as setting up the nursery, taking parenting classes, and arranging your work commitments around parental leave.\n\nBy adhering to this structured timeline, you can follow the IVF journey with a gestational carrier while considering the necessary legal, medical, and emotional aspects involved. Always ensure that all parties have access to counseling and support throughout the entire process. Good luck on your journey to expanding your family!	\N	2024-10-16 13:43:56.660634-07	\N	\N
3	1	IVF	sperm bank	n/a	1 year	Planning a family as a queer couple with a gestational carrier using IVF and a sperm bank can be an exciting journey. Here's a detailed plan to guide you through the process over the next year, tailored to your specific needs and preferences:\n\n### Month 1-2: Research and Initial Planning\n- **Research Clinics and Specialists**: Identify fertility clinics in California that specialize in IVF and have experience working with LGBTQ+ families.\n- **Select a Sperm Bank**: Evaluate sperm banks to find one that offers a diverse selection of donors, ensuring they meet your medical and personal requirements.\n- **Consultations**: Schedule initial consultations with your chosen fertility clinic to discuss the IVF process and any legal considerations.\n\n### Month 3-4: Legal and Psychological Preparation\n- **Legal Counsel**: Engage with a lawyer specializing in reproductive and family law in California to draft agreements related to sperm donation, gestational carrier arrangements, and parental rights.\n- **Psychological Support**: Consider psychological counseling for all parties involved to prepare emotionally for the IVF process and parenting journey.\n\n### Month 5-6: Medical Preparations\n- **Medical Evaluations**: Complete any required medical evaluations for the intended parents and the gestational carrier to ensure everyone is ready for the IVF process.\n- **Carrier Screening**: Ensure the gestational carrier undergoes any necessary health screenings and visits with the fertility specialist.\n\n### Month 7: IVF Cycle Preparation\n- **Synchronization**: Work with the clinic to synchronize cycles between the egg provider and gestational carrier if eggs are being sourced from one of the intended parents. \n- **Medication Protocol**: Begin the medication protocol as advised by your fertility specialist to stimulate egg production.\n\n### Month 8: Egg Retrieval and Fertilization\n- **Egg Retrieval**: Schedule and undergo the egg retrieval procedure. \n- **Fertilization**: Fertilize the retrieved eggs with the donor sperm from the chosen sperm bank.\n\n### Month 9: Embryo Transfer\n- **Embryo Culture and Selection**: Allow embryos to develop and select the best quality embryos for transfer.\n- **Transfer to Gestational Carrier**: Complete the embryo transfer to the gestational carrier.\n\n### Month 10: Pregnancy Confirmation\n- **Pregnancy Test**: The gestational carrier will undergo a pregnancy test approximately two weeks after the embryo transfer to confirm pregnancy.\n- **Initial Prenatal Care**: Begin initial prenatal care with the gestational carrier to ensure a healthy pregnancy.\n\n### Month 11: Ongoing Care and Support\n- **Regular Prenatal Visits**: Continue with regular prenatal visits and support for the gestational carrier.\n- **Birth Plan**: Discuss and finalize a birth plan, ensuring that all parties are comfortable with the arrangements.\n\n### Month 12: Prepare for Arrival\n- **Logistics and Support**: Arrange any logistics for the baby's arrival and establish a support system for postpartum care.\n- **Legal Finalization**: Finalize any legal documents necessary to assert parental rights immediately after the birth.\n\nThroughout this process, maintain open and ongoing communication with healthcare providers, legal professionals, the sperm bank, and the gestational carrier to ensure a smooth and joyful journey toward expanding your family.	\N	2024-10-17 09:23:50.867499-07	\N	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mj
--

COPY public.users (user_id, email, password, location, pronouns, family_structure, date_created, name, age, has_partner, partner_name, partner_pronouns, partner_age) FROM stdin;
3	test3@test.com	123456	OH	they/them	single, 1 gestational carrier	2024-10-17 09:21:16.333395-07	\N	\N	\N	\N	\N	\N
4	test10@test.com	123456	FL	they/them	Single, 1 Gestational Carrier	2024-10-18 00:13:00.334496-07	\N	\N	\N	\N	\N	\N
5	test11@test.com	abcdefg	AK	he/him	Gay Couple, 0 Gestational Carrier	2024-10-18 00:15:23.72209-07	\N	\N	\N	\N	\N	\N
6	test13@test.com		MD	she/they	Queer Couple, 1 Gestational Carrier	2024-10-18 00:18:45.944566-07	\N	\N	\N	\N	\N	\N
7	123@test.com		CA	he/him	Single, 1 Gestational Carrier	2024-10-18 00:22:25.429639-07	\N	\N	\N	\N	\N	\N
1	test@test.com	abc123	CA	she/her	queer couple, 1 gestational carrier	2024-10-14 09:23:22.980172-07	MJ	\N	\N	\N	\N	\N
2	test2@test.com	123abc	NY	he/him	gay couple, 0 gestational carrier	2024-10-17 08:49:48.037528-07	Bob	\N	\N	\N	\N	\N
8	3test@test.com	$2b$10$AOXshz0UjZs/79z9javvquA3wGckJbxUBUI0xNxKigcsDEu.iFmHu	PA	she/they	Single, able to carry	2024-10-18 23:34:28.209263-07	Green	35	f	\N	\N	\N
10	4test@test.com	$2b$10$jPrlAuP4/OdfyTXrjuBlBufV8RUOwI9SXajt5KrOG36aZRJBybQxu	AL	she/her	Couple (both partners able to carry a pregnancy)	2024-10-18 23:39:47.201415-07	Red	31	t	Purple	she/her	33
11	5test@test.com	$2b$10$wcv2FGnvPwdGlttv1aB4T.BTNnMzzOvIRU2QdO8PFg0qD3X1gST/W	CA	she/they	Couple (neither partner able to carry a pregnancy)	2024-10-19 13:22:12.134-07	Blue	28	t	Yellow	he/him	26
12	6test@test.com	$2b$10$WWVBuhT5vbjAYPsViRP/LOhT0fg07x1k/3TGwc16OsD57Oem4BTAK	IL	xe/xir/xirs	Couple (one partner able to carry a pregnancy)	2024-10-19 17:17:38.863076-07	Grey	42	t	Perriwinkle	she/her/hers	37
\.


--
-- Name: conception_plan_plan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.conception_plan_plan_id_seq', 3, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.users_user_id_seq', 12, true);


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

