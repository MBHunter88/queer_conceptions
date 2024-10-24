import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { Button, Form, Input, Radio, Popover, Checkbox, Select, Modal } from 'antd';
import { useNavigate } from 'react-router-dom'
import GeneratedPlan from './GeneratedPlan';

const PlanForm = () => {
  const [usingDonor, setUsingDonor] = useState(false);
  const [knownFertilityIssues, setKnownFertilityIssues] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const hasWarnedRef = useRef(false);

  //user must be logged in to generate plan
  useEffect(() => {
    if (!user && !hasWarnedRef.current) {
      hasWarnedRef.current = true; 
      // Show warning modal
      Modal.warning({
        title: 'Login Required',
        content: 'Please sign up or login to generate your conception plan.',
        onOk: () => {
          navigate('/');
        },
      });
    }
  }, [user, navigate]);
 
 

  //<---------------------External API request-------------------------->//
  const handleGeneratePlan = async (values) => {
    console.log('Form values:', values);
    //use info from user profile 
    const formData = {
      ...values,
      userId: user.user_id,
      userAge: user.age,
      location: user.location,
      userFamilyStructure: user.family_structure,
      userPartner: user.has_partner,
      userPartnerAge: user.partner_age
    };
    console.log("Form data", formData)
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/plans/generate/${user.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const generatedPlan = await response.json();
        console.log('Generated Plan:', generatedPlan);
        setGeneratedPlan(generatedPlan.plan);
        setUser((prevUser) => ({
          ...prevUser,
          plan: generatedPlan.plan,
        }));
      } else {
        console.error('Plan generation failed', response.statusText)
      }
    } catch (error) {
      console.error('Error generating plan:', error);
    }
  }

  //<---------------------Popover Info Content-------------------------->//
  const ivfInfo = (
    <div>
      <p>... is a method in which sperm and eggs are
        combined in a laboratory setting to allow for fertilization outside of the body with subsequent
        transfer of the embryo back into the uterus.</p>
    </div>
  )

  const iuiInfo = (
    <p>...is a method in which sperm is inserted directly into the uterus to facilitate conception.
      This method can be performed at home but is typically performed in a clinic.</p>
  )

  const iciInfo = (
    <p>...is a method in which sperm is inserted directly near the cervix. This is often done at home
      and may be used by those seeking a less clinical option.</p>
  )

  const gcInfo = (
    <p>...is a method in which the surrogate (or gestational carrier, or GC) carries a child conceived
      of the egg and sperm of two other individuals. Specifically, the sperm of the intended parent or
      sperm donor, as well as the egg from the intended parent or an egg donor are fertilized and
      transferred, via IVF, into the gestational carrier.</p>
  )

  const tsInfo = (
    <p>...is a method in which the surrogate provides their own egg, making them biologically related to the child.
      The surrogate is then inseminated with one partner's sperm</p>
  )

  const rIvfInfo = (
    <p>...is a method that involves using one partner's eggs to create embryos, which are then transferred to the
      other partner to carry the pregnancy.</p>
  )

  const tiInfo = (
    <p>...is a method that involves having sexual intercourse during the most fertile window of the menstrual cycle,
      typically around ovulation, when the egg is released from the ovary.</p>
  )

  const fpInfo = (
    <p>...is a method used for individuals who will be undergoing hormone therapy to preserve fertility by freezing eggs or
      sperm before strating treatment.</p>
  )


  const anonymousDonor = (
    <p>...chosen through a fertility clinic or bank, and their identity remains private.</p>
  )

  const knownDonor = (
    <p>...someone who is personally known to the intended parents, such as a friend, family member, or partner.</p>
  )

  //<-----------------------additional event handler functions----------------------->//
 // timeline options
 const timelineOptions = [
  {
    value:'6 months',
    lable: <span>6 months</span>
  },
  {
    value:'1 year',
    lable: <span>1 year</span>
  },
  {
    value:'2 years',
    lable: <span>2 years</span>
  },
  {
    value:'5+ years',
    lable: <span>5+ years</span>
  },
  {
    value:"I don't know",
    lable: <span>I don't know</span>
  }
 ]

const handleGetNewPlan = () => {
  setUser((prevUser) => ({
    ...prevUser,
    plan: null,
  }));
  navigate('/planner')
  console.log("User plan details:", user.plan)
}

  return (
    <>
     {generatedPlan === null ? (
        <Form onFinish={handleGeneratePlan} >

          <Form.Item label="Timeline" name="timeline">
            <Select placeholder="When do you plan on starting your conception journey?"
              options={timelineOptions}
              dropdownStyle={{ maxWidth: '100%', whiteSpace: 'normal' }} />
          </Form.Item>

          <Form.Item label="Sex assigned at birth" name='sex_at_birth' rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value='Male'>Male</Radio>
              <Radio value='Female'>Female</Radio>
            </Radio.Group>
          </Form.Item>

          {user?.has_partner && (
            <Form.Item label="Partner sex assigned at birth" name='partner_sex_at_birth' rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value='Male'>Male</Radio>
                <Radio value='Female'>Female</Radio>
              </Radio.Group>
            </Form.Item>
          )}

          <Form.Item label="Conception Method" name="method_choice" valuePropName="checked" rules={[{ required: true, message: 'Please select at least one conception method.' }]}>
            <Checkbox.Group>
              <Checkbox value='IVF'>
                <Popover content={ivfInfo} trigger='hover'>
                  <span>IVF</span>
                </Popover>
              </Checkbox>
              <Checkbox value="Reciprocal IVF">
                <Popover content={rIvfInfo} trigger='hover'>
                  <span>Reciprocal IVF</span>
                </Popover>
              </Checkbox>
              <Checkbox value='IUI'>
                <Popover content={iuiInfo} trigger='hover'>
                  <span>IUI</span>
                </Popover>
              </Checkbox>
              <Checkbox value='ICI'>
                <Popover content={iciInfo} trigger='hover'>
                  <span>ICI</span>
                </Popover>
              </Checkbox>
              <Checkbox value='Gestational Surrogacy'>
                <Popover content={gcInfo} trigger='hover'>
                  <span>Gestational Surrogacy</span>
                </Popover>
              </Checkbox>
              <Checkbox value='Traditional Surrogacy'>
                <Popover content={tsInfo} trigger='hover'>
                  <span>Traditional Surrogacy</span>
                </Popover>
              </Checkbox>
              <Checkbox value='Timed-Intercourse'>
                <Popover content={tiInfo} trigger='hover'>
                  <span>Timed-Intercourse</span>
                </Popover>
              </Checkbox>
              <Checkbox value='Fertility preservation'>
                <Popover content={fpInfo} trigger='hover'>
                  <span>Fertility Preservation</span>
                </Popover>
              </Checkbox>
              <Checkbox value="I don't know can you help me decide?">
                I don't know can you help me decide?
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item label='Known Fertility Issues' name='selected_fertility_issues' rules={[{ required: true }]}>
            <Radio.Group onChange={(e) => setKnownFertilityIssues(e.target.value)}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
              <Radio value={'unsure'}>Unsure</Radio>
            </Radio.Group>
          </Form.Item>

          {knownFertilityIssues === true && (
            <Form.Item label='Please specify' name='known_fertility_issues'>
              <Input placeholder='List any known fertility concerns here' />
            </Form.Item>
          )}

          <Form.Item label='Will you be using a donor?' name='using_donor' rules={[{ required: true }]}>
            <Radio.Group onChange={(e) => setUsingDonor(e.target.value)}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
              <Radio value={'unsure'}>Unsure</Radio>
            </Radio.Group>
          </Form.Item>

          {usingDonor === true && (
            <Form.Item label="Donor Options" name='donor_preference'>
              <Checkbox.Group>
                <Checkbox value='Anonymous Donor'>
                  <Popover content={anonymousDonor} trigger='hover'>
                    <span>Anonymous sperm/egg/embryo</span>
                  </Popover>
                </Checkbox>
                <Checkbox value='Known Donor'>
                  <Popover content={knownDonor} trigger='hover'>
                    <span>Known sperm/egg/embryo (including partner contributions)</span>
                  </Popover>
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          )}

          <Button type='primary' htmlType='submit'>Generate Plan</Button>

        </Form>
      ) : (
        <><GeneratedPlan plan={user.plan} /> <br/>
        <Button type="primary" onClick={handleGetNewPlan}>
            Get New Plan
          </Button></>
      )}
    </>
  );
};

export default PlanForm;
