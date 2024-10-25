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
    budget int4range,
    sex_at_birth character varying,
    partner_sex_at_birth character varying,
    using_donor boolean,
    selected_fertility_issues boolean
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

COPY public.conception_plan (plan_id, user_id, method_choice, donor_preference, known_fertility_issues, timeline, generated_plan, status, date_created, budget, sex_at_birth, partner_sex_at_birth, using_donor, selected_fertility_issues) FROM stdin;
4	12	{"IVF"}	{"Anonymous"}	\N	1 year	Creating a family plan is an exciting journey, and I'm here to help you with steps tailored to your situation. As a couple in Illinois with the choice of IVF and a preference for an anonymous donor, here's a proposed plan over the next year.\n\n### Initial Steps & Research (Months 1-2)\n1. **Find a Fertility Clinic**: Begin by researching fertility clinics in your area that are LGBTQ+ friendly and have experience with IVF treatments. Look for clinics with positive reviews and success rates.\n\n2. **Consult with a Specialist**: Schedule initial consultations to discuss your family planning goals, fertility history (if any), and the IVF process. This meeting will help in understanding timelines and potential challenges.\n\n3. **Financial Planning**: Consult with the clinic about the cost of IVF and inquire about insurance coverage. Illinois mandates insurance coverage for infertility treatments, but check specific policy details. Explore financial aid or payment plans if necessary.\n\n### Medical Preparations & Donor Selection (Months 3-4)\n4. **Medical Evaluations**: Undergo necessary medical evaluations and preliminary testing (hormone levels, ultrasounds, etc.) for the partner planning to carry the pregnancy to ensure xe is healthy and prepared for IVF.\n\n5. **Donor Selection**: Work with your fertility clinic to choose an anonymous sperm donor. Clinics usually have databases to browse donor profiles based on characteristics important to you (e.g., physical traits, education, medical history).\n\n### IVF Process & Treatment (Months 5-9)\n6. **Treatment Protocol**: Your fertility specialist will develop a personalized treatment plan. It typically includes:\n   - **Ovarian Stimulation**: Begin hormone treatments to stimulate ovaries to produce multiple eggs.\n   - **Monitoring**: Frequent clinic visits for monitoring hormone levels and follicle development through blood tests and ultrasounds.\n   - **Egg Retrieval**: A minor surgical procedure to collect eggs from the ovaries. This is typically performed under sedation.\n\n7. **Fertilization and Embryo Culture**: Eggs are fertilized with donor sperm in a lab. The embryos are then cultured and observed for development.\n\n8. **Embryo Transfer**: After embryo growth (usually 3-5 days), a healthy embryo is transferred into the uterine cavity of the partner carrying the pregnancy.\n\n9. **Pregnancy Test**: Two weeks after the embryo transfer, take a pregnancy test at your clinic to confirm success.\n\n### Post-Treatment Care and Support (Months 10-12)\n10. **Prenatal Care**: If the pregnancy test is positive, start prenatal care with an obstetrician experienced in assisting LGBTQ+ families. Continue regular check-ups.\n\n11. **Support Systems**: Build a support network, which may include counseling services, support groups for LGBTQ+ families, and childbirth classes, to prepare for the new arrival.\n\n12. **Legal and Parental Rights**: Consult with a legal expert to understand any necessary steps to ensure both partners' parental rights, such as second-parent adoption, if applicable in your situation.\n\n### Key Considerations:\n- **Flexibility**: The IVF process can vary, and timelines might adjust based on the response to treatments or unforeseen circumstances. \n- **Emotional Readiness**: It's vital to stay emotionally connected and support each other through this journey. Consider including a therapist specializing in fertility issues.\n\n### Resources:\n- **LGBTQ+ Family Organizations**: Locate local or national organizations that offer resources and support tailored to LGBTQ+ families planning children.\n- **Illinois Insurance Coverage**: Familiarize yourself with the specificities of Illinois laws regarding fertility treatment coverage.\n\nRemember, this plan is just a guideline and should adapt to your specific needs and experiences as you progress through the IVF journey. Wishing you all the best in creating your family!	\N	2024-10-22 14:48:08.357853-07	\N	\N	\N	\N	\N
5	12	{"IVF"}	{"Anonymous"}	\N	1 year	Creating a family is a deeply personal and meaningful journey, and I'm here to help guide you through the steps involved in starting your family using IVF with an anonymous donor. Below is a structured plan tailored to your specific details and preferences:\n\n### Initial Steps\n\n1. **Research and Select Fertility Clinics:**\n   - Look for IVF clinics in Illinois known for their supportive environments for LGBTQ+ families. Consider factors like success rates, experience with LGBTQ+ couples, and patient reviews.\n   - Schedule consultations with a few selected clinics to find one that feels right for you both.\n\n2. **Partner Consultation:**\n   - During consultations, discuss your preferences for an anonymous sperm donor and any specifics about fertility issues, even if they're not known, to ensure all bases are covered.\n\n3. **Financial Planning:**\n   - Check your insurance to see what fertility services are covered in Illinois. Discuss financial plans with your chosen clinic, including payment plans or financing options.\n\n### Pre-IVF Process (Months 1-3)\n\n4. **Initial Medical Assessments:**\n   - Both partners should undergo necessary medical evaluations. The partner intending to carry may need a comprehensive fertility assessment.\n   - Depending on the outcomes of these assessments, you may need to adjust your timeline slightly.\n\n5. **Counseling and Support:**\n   - Engage in counseling services. Many clinics offer this as part of their psychological support services for couples undergoing IVF.\n\n6. **Select a Donor:**\n   - Work with your clinic to access their sperm bank for anonymous donors. Consider your preferences such as physical characteristics, background, and genetic traits.\n\n### IVF Preparation (Months 4-6)\n\n7. **Legal Consultation:**\n   - Consult an attorney specializing in family and reproductive law in Illinois to understand your rights and any steps needed to ensure both partners have legal parenthood.\n\n8. **IVF Protocol:**\n   - The partner carrying should begin the necessary medical preparations as advised by your fertility specialist, such as hormonal treatments to prepare for egg retrieval and embryo transfer.\n\n9. **Complete Necessary Paperwork:**\n   - Ensure all consents and legal documents, such as donor agreements and informed consent forms, are signed.\n\n### IVF Cycle (Months 7-9)\n\n10. **Embryo Creation and Transfer:**\n    - Proceed with egg retrieval and fertilization using the anonymous donor sperm. Once embryos are formed, your doctor will coordinate the transfer process.\n\n11. **Monitor and Assess:**\n    - Following the embryo transfer, attend all necessary appointments to monitor the pregnancy's progress.\n\n### Pregnancy and Beyond (Months 10-12)\n\n12. **Pregnancy Support:**\n    - Engage in regular prenatal care and continue utilizing support systems like counseling if needed.\n\n13. **Birth Plans:**\n    - Create a birthing plan, taking into account the partner’s preferences and needs, and communicate this with your healthcare provider.\n\n14. **Legal Finalization:**\n    - If applicable, work with your attorney to ensure all paperwork is in place for birth certificates and any parental rights.\n\n15. **Prepare for Baby:**\n    - As you approach the end of the year, set up your home and resources in preparation for welcoming the newest member of your family.\n\n### Additional Tips\n\n- **Support Networks:**\n  - Connect with local or online LGBTQ+ parenting groups for support, advice, and shared experiences throughout this journey.\n\n- **Staying Informed:**\n  - Keep updated with any changes in Illinois state laws affecting LGBTQ+ parenthood and reproductive rights.\n\nBy following these steps and working closely with your chosen clinic and support teams, you should be well-prepared for this exciting journey toward becoming parents. Remember to remain flexible and supportive of each other's needs throughout the process.	\N	2024-10-22 14:57:53.546844-07	\N	\N	\N	\N	\N
6	11	{"Gestational Surrogacy"}	{"Known Donor"}	\N	6 months	Creating a family through gestational surrogacy with a known donor is a complex but rewarding journey. Below is a comprehensive plan tailored to your situation, keeping in mind the timeline of six months:\n\n### **Month 1: Research and Initial Consultations**\n\n1. **Research and Education**\n   - Learn about the gestational surrogacy process, your legal rights, and the responsibilities involved.\n   - Understand the requirements and laws in California, which is a surrogacy-friendly state.\n\n2. **Consult a Reproductive Endocrinologist**\n   - Schedule a consultation with a fertility clinic experienced in gestational surrogacy.\n   - Discuss your timeline, donor preference, and explore your options regarding egg/sperm donation, embryo creation, and transfer.\n\n3. **Legal Consultation**\n   - Meet with an attorney specializing in reproductive and surrogacy law. California requires a solid legal foundation to ensure all parties are protected.\n\n### **Month 2: Secure Known Donor and Surrogacy Agency**\n\n1. **Identify and Discuss with Known Donor**\n   - Have in-depth discussions with your chosen donor to confirm their willingness and understanding of the process and legal implications.\n\n2. **Choose a Surrogacy Agency**\n   - Select an agency that suits your needs. They can assist with finding a suitable surrogate, conducting background checks, and managing logistics.\n\n3. **Medical Evaluations for Donor**\n   - Begin the donor’s medical evaluation and testing at your selected fertility clinic to confirm their ability to donate.\n\n### **Month 3: Legal Contracts and Surrogate Matching**\n\n1. **Draft Legal Contracts**\n   - Begin the process of drafting legal contracts. These should include parental rights, financial responsibilities, and expectations for all parties.\n   - Ensure the known donor agreement is in place, clearly stating their rights and responsibilities.\n\n2. **Surrogate Matching Process**\n   - Work with your agency to match with a surrogate. This involves reviewing profiles, meeting potential surrogates, and mutual selection.\n\n### **Month 4: Medical and Psychological Screening**\n\n1. **Surrogate Screening**\n   - Ensure your surrogate undergoes thorough medical and psychological screenings to confirm her suitability.\n\n2. **Donor Preparation**\n   - The known donor should also undergo psychological counseling to affirm their understanding and comfort with the donation process.\n\n3. **Finalize Legal Contracts**\n   - Once all parties (you, the surrogate, and the donor) have passed screenings, finalize and sign all legal documents.\n\n### **Month 5: Fertility Treatments and Embryo Creation**\n\n1. **Start Fertility Treatments**\n   - Begin the process of ovarian stimulation for the donor, followed by egg retrieval.\n   - Fertilize the eggs with sperm (from yourself or your partner, as previously decided) to create embryos.\n\n2. **Embryo Freezing/Embryo Transfer Planning**\n   - Depending on the timeline and medical advice, embryos may be frozen or prepared for fresh transfer.\n\n### **Month 6: Embryo Transfer and Pregnancy Confirmation**\n\n1. **Embryo Transfer**\n   - Upon determining the surrogate is ready, proceed with the embryo transfer.\n\n2. **Pregnancy Monitoring**\n   - Approximately 10 days post-transfer, conduct a pregnancy test to confirm successful implantation. Follow this with regular monitoring and support for your surrogate.\n\n### **Additional Considerations**\n\n- **Continuous Support**\n  Provide emotional and practical support to both your surrogate and known donor throughout the process.\n\n- **Prepare for Parenting**\n  Use the waiting period to prepare your home and yourselves for the upcoming addition to your family.\n\n- **Stay Flexible**\n  While a six-month timeline is ambitious, remain flexible as various factors can influence the schedule.\n\nBy following this plan and maintaining open communication with all parties involved, you'll be well-prepared for embarking on this exciting journey towards building your family.	\N	2024-10-22 15:47:35.504105-07	\N	\N	\N	\N	\N
7	8	{"Traditional Surrogacy"}	{"Known Donor"}	\N	2 years	Creating a family plan for someone interested in traditional surrogacy involves several steps and considerations. Since you are located in Pennsylvania and are opting for a known donor, we'll tailor the plan accordingly. Here’s a step-by-step guide to help you navigate through this journey over the next two years:\n\n### Year 1: Preparation and Planning\n\n**Months 1-3: Research and Education**\n- **Understand Traditional Surrogacy:** Traditional surrogacy involves the surrogate being the biological mother since her egg is used. Familiarize yourself with the legal, emotional, and ethical implications.\n- **Learn Pennsylvania Laws:** Pennsylvania doesn’t have specific surrogacy laws, but it’s generally considered favorable for surrogacy arrangements. A consultation with a surrogacy attorney will provide clarity on the creation and enforcement of surrogacy agreements.\n\n**Months 4-6: Legal Considerations**\n- **Consult with a Surrogacy Attorney:** Find a lawyer experienced in surrogacy law in Pennsylvania. They will help draft a surrogacy contract and ensure your rights and legal relationships with the child and donor are clearly defined.\n- **Vet Potential Donors:** Since you are opting for a known donor, ensure that both parties understand the implications. Consider having a separate consultation with an attorney for the donor to cover their rights and responsibilities.\n\n**Months 7-9: Financial and Emotional Planning**\n- **Budgeting:** Traditional surrogacy involves costs such as medical expenses and legal fees. Budget for these expenses early.\n- **Counseling:** Consider meeting with a fertility counselor to explore the emotional aspects of surrogacy using a known donor. Counseling can also prepare you for potential challenges during the process.\n\n**Months 10-12: Health and Wellness**\n- **Fertility Assessment:** Even if you have no known fertility issues, visiting a fertility specialist for a health check-up, testing for potential issues, and preparing your body for pregnancy is wise.\n- **Lifestyle Preparations:** Focus on a healthy lifestyle by maintaining a balanced diet, exercising, and managing stress, as these are beneficial for conception and pregnancy.\n\n### Year 2: Implementation and Execution\n\n**Months 13-15: Finalizing Arrangements**\n- **Select and Confirm Donor:** Make a final decision on your known donor. It’s crucial that the donor is comfortable and fully informed about their role.\n- **Medical Screening for Donor:** Have your donor undergo necessary medical and genetic screening to ensure they are healthy and suitable.\n\n**Months 16-18: Legal and Contractual Finalization**\n- **Draft Surrogacy Agreement:** Work with your surrogacy attorney to finalize the contract with the donor and outline all the terms clearly.\n- **Confirm Informed Consent:** Ensure that all parties involved are fully aware and have consented to their roles legally and morally.\n\n**Months 19-21: Medical Preparations**\n- **Insemination Process:** Coordinate with a fertility clinic to begin the insemination process. Traditional surrogacy usually utilizes intrauterine insemination (IUI).\n- **Monitor Health:** Continue to monitor your health and that of the donor throughout the insemination process.\n\n**Months 22-24: Pregnancy and Post-Pregnancy Planning**\n- **Pregnancy Care:** Once pregnancy is confirmed, follow up with regular prenatal care appointments.\n- **Parentage Order:** Work with your attorney to obtain a parentage order before birth, which will secure your legal rights to the child.\n\n### Ongoing: Emotional and Support Planning\n- **Establish a Support Network:** Engage with local or online LGBTQ+ family planning groups for support and advice.\n- **Post-Birth Plans:** Consider creating a post-birth plan that involves considerations for time off work, child care, and home arrangements.\n\nBy following this structured plan, you can navigate the complexities of traditional surrogacy while being informed, prepared, and supported throughout your journey to parenthood.	\N	2024-10-22 16:05:54.020727-07	\N	\N	\N	\N	\N
8	12	{"Reciprocal IVF"}	{"Anonymous Donor"}	\N	1 year	Reciprocal IVF is a wonderful option for many same-sex female couples who want to be involved biologically in the process of creating a family. Reciprocal IVF allows one partner to provide the eggs while the other partner carries the pregnancy, enabling both to have a biological connection to their child. Here's a step-by-step plan to guide you and your partner through the process, given your desire for an anonymous donor and a timeline of approximately one year:\n\n### Step 1: Choose a Fertility Clinic\n1. **Research and Select a Clinic in Illinois**: \n   - Look for fertility clinics with experience in LGBTQ+ family planning and reciprocal IVF.\n   - Consider factors such as success rates, reviews, and the clinic's supportiveness towards your preferences and needs.\n\n2. **Initial Consultation**:\n   - Schedule and attend an initial consultation to understand the clinic’s processes, costs, and options for anonymous sperm donation.\n   - Discuss any potential concerns or preferences you and your partner have.\n\n### Step 2: Medical and Psychological Assessments\n1. **Medical Evaluations**:\n   - Both partners should have thorough fertility assessments. This may include blood tests, ultrasounds, and ovarian reserve testing for the egg-providing partner.\n   - The partner planning to carry should undergo a uterine evaluation to ensure it is healthy for pregnancy.\n\n2. **Psychological Counseling**:\n   - Participate in any required counseling sessions, often recommended to discuss the emotional implications of using a donor.\n\n### Step 3: Sperm Donor Selection\n1. **Anonymous Donor Selection**:\n   - Use the clinic’s resources or a reputable sperm bank to select an anonymous donor.\n   - Consider factors like genetic attributes, physical characteristics, and personal traits important to you.\n\n### Step 4: IVF Cycle Preparation\n1. **Ovarian Stimulation** (for the partner providing eggs):\n   - Hormonal treatment to stimulate the ovaries to produce multiple eggs.\n   - Requires regular monitoring through ultrasounds and blood tests.\n\n2. **Egg Retrieval**:\n   - Once the eggs reach maturity, they will be retrieved in a minor surgical procedure.\n\n3. **Fertilization**:\n   - The retrieved eggs will be fertilized with the selected donor sperm in the laboratory.\n\n### Step 5: Embryo Transfer\n1. **Embryo Transfer Preparation** (for the partner carrying the pregnancy):\n   - The uterine lining will be prepared with hormone treatments to receive the embryo.\n\n2. **Transfer**:\n   - A selected embryo (or embryos) will be transferred into the uterus of the partner carrying the pregnancy.\n\n### Step 6: Pregnancy and Post-Transfer Care\n1. **Pregnancy Testing**:\n   - Approximately two weeks after the transfer, a blood test will confirm pregnancy.\n\n2. **Regular Prenatal Care**:\n   - Once confirmed, start regular prenatal appointments to monitor the pregnancy.\n\n### Timing and Cost Considerations\n- **Timeline**: Aim to start the cycle preparation within the first few months to allow for potential adjustments needed for health or other circumstances, with the goal of achieving a positive pregnancy within your one-year timeline.\n  \n- **Costs**: Discuss detailed cost breakdowns with your clinic, including IVF procedures, donor sperm, and any medications. Investigate insurance coverage possibilities in Illinois for fertility treatments and see if any financial assistance or grant programs are available.\n\n### Legal Considerations\n- Consult with a legal professional specializing in family law to understand parental rights and ensure protection for both partners.\n\n### Emotional Support\n- Engage with LGBTQ+ family support groups in Illinois or online to share experiences and gain support from those who have undergone similar journeys.\n\nBy following these steps, you and your partner can navigate the process of reciprocal IVF with clear goals and confidence. Remember, open communication and support for one another throughout the journey are crucial. Good luck on your path to parenthood!	\N	2024-10-22 17:20:09.200295-07	\N	Female	Female	t	f
9	8	{"Traditional Surrogacy"}	{"Known Donor"}	\N	6 months	\n    Based on the provided details, here is your conception plan:\n\n    Location: PA,\n    Pronouns: she/they,\n    Family structure: Single, able to carry,\n    Method choice: Traditional Surrogacy,\n    Donor preference: Known Donor,\n    Known fertility issues: not specified,\n    Timeline: 6 months.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 17:32:19.082438-07	\N	Male	\N	t	f
10	8	{"Reciprocal IVF"}	{"Anonymous Donor"}	\N	1 year	\n    Based on the provided details, here is your conception plan:\n\n    Location: PA,\n    Pronouns: she/they,\n    Family structure: Single, able to carry,\n    Method choice: Reciprocal IVF,\n    Donor preference: Anonymous Donor,\n    Known fertility issues: not specified,\n    Timeline: 1 year.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 17:36:47.899369-07	\N	Female	\N	t	f
11	14	{"IVF"}	{"Known Donor"}	\N	1 year	\n    Based on the provided details, here is your conception plan:\n\n    Location: NY,\n    Pronouns: they/them/theirs,\n    Family structure: Both partners are willing and/or able to be gestational carrier,\n    Method choice: IVF,\n    Donor preference: Known Donor,\n    Known fertility issues: not specified,\n    Timeline: 1 year.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 18:02:41.52337-07	\N	Female	Male	t	f
12	14	{"IVF"}	{"Anonymous Donor"}	\N	6 months	\n    Based on the provided details, here is your conception plan:\n\n    Location: NY,\n    Pronouns: they/them/theirs,\n    Family structure: Both partners are willing and/or able to be gestational carrier,\n    Method choice: IVF,\n    Donor preference: Anonymous Donor,\n    Known fertility issues: not specified,\n    Timeline: 6 months.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 18:27:54.681968-07	\N	Female	Male	t	f
13	15	{"IVF"}	{"Known Donor"}	\N	6 months	\n    Based on the provided details, here is your conception plan:\n\n    Location: OR,\n    Pronouns: xe/xir/xirs,\n    Family structure: Couple (one partner is willing and/or able to be gestational carrier),\n    Method choice: IVF,\n    Donor preference: Known Donor,\n    Known fertility issues: not specified,\n    Timeline: 6 months.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 18:46:09.595299-07	\N	Male	Female	t	f
14	14	{"Reciprocal IVF"}	{"Anonymous Donor"}	\N	6 months	\n    Based on the provided details, here is your conception plan:\n\n    Location: NY,\n    Pronouns: they/them/theirs,\n    Family structure: Both partners are willing and/or able to be gestational carrier,\n    Method choice: Reciprocal IVF,\n    Donor preference: Anonymous Donor,\n    Known fertility issues: not specified,\n    Timeline: 6 months.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 18:54:49.829092-07	\N	Female	Male	t	f
15	14	{"Reciprocal IVF"}	{"Anonymous Donor"}	\N	1 year	\n    Based on the provided details, here is your conception plan:\n\n    Location: NY,\n    Pronouns: they/them/theirs,\n    Family structure: Both partners are willing and/or able to be gestational carrier,\n    Method choice: Reciprocal IVF,\n    Donor preference: Anonymous Donor,\n    Known fertility issues: not specified,\n    Timeline: 1 year.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 19:50:17.617868-07	\N	Female	Female	t	f
16	14	{"Reciprocal IVF"}	{"Anonymous Donor"}	\N	2 years	\n    Based on the provided details, here is your conception plan:\n\n    Location: NY,\n    Pronouns: they/them/theirs,\n    Family structure: Both partners are willing and/or able to be gestational carrier,\n    Method choice: Reciprocal IVF,\n    Donor preference: Anonymous Donor,\n    Known fertility issues: not specified,\n    Timeline: 2 years.\n\n    Suggested next steps include consulting with a fertility specialist to determine the most suitable conception method and considering counseling if using a donor. For further assistance, visit the resource library.\n    	\N	2024-10-22 20:02:47.765498-07	\N	Female	Female	t	f
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mj
--

COPY public.users (user_id, email, password, location, pronouns, family_structure, date_created, name, age, has_partner, partner_name, partner_pronouns, partner_age) FROM stdin;
8	3test@test.com	$2b$10$AOXshz0UjZs/79z9javvquA3wGckJbxUBUI0xNxKigcsDEu.iFmHu	PA	she/they	Single, able to carry	2024-10-18 23:34:28.209263-07	Green	35	f	\N	\N	\N
10	4test@test.com	$2b$10$jPrlAuP4/OdfyTXrjuBlBufV8RUOwI9SXajt5KrOG36aZRJBybQxu	AL	she/her	Couple (both partners able to carry a pregnancy)	2024-10-18 23:39:47.201415-07	Red	31	t	Purple	she/her	33
11	5test@test.com	$2b$10$wcv2FGnvPwdGlttv1aB4T.BTNnMzzOvIRU2QdO8PFg0qD3X1gST/W	CA	she/they	Couple (neither partner able to carry a pregnancy)	2024-10-19 13:22:12.134-07	Blue	28	t	Yellow	he/him	26
12	6test@test.com	$2b$10$WWVBuhT5vbjAYPsViRP/LOhT0fg07x1k/3TGwc16OsD57Oem4BTAK	IL	xe/xir/xirs	Couple (one partner able to carry a pregnancy)	2024-10-19 17:17:38.863076-07	Grey	42	t	Perriwinkle	she/her/hers	37
13	7test@test.com	$2b$10$b54FpCTxVldAk5K1NdLynO3JORcit7WOEfnB2zYAfrvV8islq4Aoa	CA	he/him/his	Couple (one partner is willing and/or able to be gestational carrier)	2024-10-22 17:41:51.858732-07	Orange	40	t	Brown	they/them/theirs	32
14	8test@test.com	$2b$10$lcHBHCoPImB5kxnUrVqcMOw5WjOrvsxez.rhdTW2m07phmmMLnJui	NY	they/them/theirs	Both partners are willing and/or able to be gestational carrier	2024-10-22 17:45:52.597889-07	Mauve	27	t	Cerulean	they/them/theirs	22
15	9test@test.com	$2b$10$33qZEp0BozTClOX62DW/DuEltHqHtIy9n23N6..MX0U3fgV1HtD92	OR	xe/xir/xirs	Couple (one partner is willing and/or able to be gestational carrier)	2024-10-22 17:49:48.074348-07	Ran Out of Colors	25	t	Color	she/her/hers	26
\.


--
-- Name: conception_plan_plan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.conception_plan_plan_id_seq', 16, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mj
--

SELECT pg_catalog.setval('public.users_user_id_seq', 15, true);


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

