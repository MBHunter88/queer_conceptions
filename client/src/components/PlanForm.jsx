import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Button, Form, Input, Radio, Popover, Checkbox, Select, Modal, Spin } from 'antd';
import { useNavigate } from 'react-router-dom'
import GeneratedPlan from './GeneratedPlan';


const PlanForm = () => {
  const [usingDonor, setUsingDonor] = useState(false);
  const [knownFertilityIssues, setKnownFertilityIssues] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [showForm, setShowForm] = useState(false)
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  //const hasWarnedRef = useRef(false);

  //user must be logged in to generate plan
 
    const handleShowForm = () => {
      if (!user) {
        // Show warning modal if the user is not logged in
        Modal.warning({
          title: 'Login Required',
          content: 'Please sign up or login to generate your conception plan.',
          onOk: () => {
            navigate('/');
          },
        });
      } else {
        setShowForm(true);
      }
    };

 
 

  //<---------------------External API request-------------------------->//
  const handleGeneratePlan = async (values) => {
    setLoading(true)
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
        const errorResponse = await response.json(); 
        console.error('Plan generation failed', response.statusText, errorResponse);
      }
    } catch (error) {
      console.error('Error generating plan:', error);
    } finally {
      setLoading(false)
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
 //<-----------------------additional event handler functions----------------------->//

// Check if the plan is loading
if (loading) {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <Spin size="large" tip="Generating your plan, please wait..." />
</div>
}

const handleGetNewPlan = () => {
  setUser((prevUser) => ({
    ...prevUser,
    plan: null,
  }));
  setGeneratedPlan(null);
  setShowForm(false);
  navigate('/planner')
  console.log("User plan details:", user.plan)
}

const handleDisclosure = (values) => {
  Modal.confirm({
    title: 'Third-Party Data Disclosure',
    content: (
      <>
         Your information is being sent to a third party (OpenAI) for generating your conception plan. 
         Are you sure you want to continue?
        <br />
        For more details, please see our{' '}
        <a
          href="/privacy-policy"
          style={{ marginLeft: '5px', color: '#1890ff' }}
        >
          Privacy Policy
        </a>.
      </>
    ),
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: () => {
      handleGeneratePlan(values);
    },
    onCancel: () => {
      console.log('User declined to proceed');
    },
  });
}

  return (
    <>
    {user?.plan && !showForm && (
      <>
        <Button type="primary" onClick={handleGetNewPlan} style={{ marginBottom: '20px',  backgroundColor: '#007000',
            borderColor: '#007000', }}>
          Get New Plan
        </Button>
        <GeneratedPlan plan={user.plan} /> <br />
      </>
    )}
  
    {!showForm && !user?.plan && (
      <Button type="primary" onClick={handleShowForm}  style={{
        backgroundColor: '#007000',
        borderColor: '#007000',
        color: '#fff',
        fontWeight: '500',
        marginTop: '20px',
        textAlign: 'center'
      }}>
        Start Conception Plan
      </Button>
    )}
  
    {showForm && !generatedPlan && user && (
      <Form
        onFinish={handleDisclosure}
        data-testid="plan-form"
        layout="vertical"
        style={{ width: '100%', padding: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffff' }}
      >
        <Form.Item
          label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Timeline</span>}
          name="timeline"
          style={{ marginBottom: '20px' }}
        >
          <Select
            placeholder="When do you plan on starting your conception journey?"
            options={timelineOptions}
            dropdownStyle={{ maxWidth: '100%', whiteSpace: 'normal' }}
            style={{ fontSize: '1rem' }}
          />
        </Form.Item>
  
        <Form.Item
         label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Sex assigned at birth</span>}
          name="sex_at_birth"
          rules={[{ required: true }]}
          style={{ marginBottom: '20px' }}
        >
          <Radio.Group style={{ fontSize: '1rem' }}>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>
  
        {user?.has_partner && (
          <Form.Item
          label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Partner sex assigned at birth</span>}
            name="partner_sex_at_birth"
            rules={[{ required: true }]}
            style={{ marginBottom: '20px' }}
          >
            <Radio.Group style={{ fontSize: '1rem' }}>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        )}
  
        <Form.Item
          label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Conception Method</span>}
          name="method_choice"
          valuePropName="checked"
          rules={[{ required: true, message: 'Please select at least one conception method.' }]}
          style={{ marginBottom: '20px' }}
        >
          <Checkbox.Group>
            {[
              { value: 'IVF', label: 'IVF', popover: ivfInfo },
              { value: 'Reciprocal IVF', label: 'Reciprocal IVF', popover: rIvfInfo },
              { value: 'IUI', label: 'IUI', popover: iuiInfo },
              { value: 'ICI', label: 'ICI', popover: iciInfo },
              { value: 'Gestational Surrogacy', label: 'Gestational Surrogacy', popover: gcInfo },
              { value: 'Traditional Surrogacy', label: 'Traditional Surrogacy', popover: tsInfo },
              { value: 'Timed-Intercourse', label: 'Timed-Intercourse', popover: tiInfo },
              { value: 'Fertility preservation', label: 'Fertility Preservation', popover: fpInfo },
              { value: "I don't know can you help me decide?", label: "I don't know can you help me decide?" },
            ].map((method) => (
              method.popover ? (
                <Checkbox value={method.value} key={method.value} style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  <Popover content={method.popover} trigger="hover" overlayStyle={{ maxWidth: '300px' }}>
                    <span
                      style={{
                        color: '#007000',
                        textDecoration: '',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#004d00'}
                      onMouseLeave={(e) => e.target.style.color = '#007000'}
                    >
                      {method.label}
                    </span>
                  </Popover>
                </Checkbox>
              ) : (
                <Checkbox value={method.value} key={method.value} style={{ marginBottom: '10px', fontSize: '1rem' }}>
                  {method.label}
                </Checkbox>
              )
            ))}
          </Checkbox.Group>
        </Form.Item>
  
        <Form.Item
         label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Known Fertility Issues</span>}
          name="selected_fertility_issues"
          rules={[{ required: true }]}
          style={{ marginBottom: '20px', fontSize: '1.2rem' }}
        >
          <Radio.Group onChange={(e) => setKnownFertilityIssues(e.target.value)} style={{ fontSize: '1rem' }}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
            <Radio value="unsure">Unsure</Radio>
          </Radio.Group>
        </Form.Item>
  
        {knownFertilityIssues === true && (
          <Form.Item
          label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Please specify</span>}
            name="known_fertility_issues"
            style={{ marginBottom: '20px' }}
          >
            <Input placeholder="List any known fertility concerns here" style={{ fontSize: '1rem' }} />
          </Form.Item>
        )}
  
        <Form.Item
         label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Will you be using a donor?</span>}
          name="using_donor"
          rules={[{ required: true }]}
          style={{ marginBottom: '20px' }}
        >
          <Radio.Group onChange={(e) => setUsingDonor(e.target.value)} style={{ fontSize: '1rem' }}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
            <Radio value="unsure">Unsure</Radio>
          </Radio.Group>
        </Form.Item>
  
        {usingDonor === true && (
          <Form.Item
          label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Donor Options</span>}
            name="donor_preference"
            style={{ marginBottom: '20px' }}
          >
            <Checkbox.Group>
              {[
                { value: 'Anonymous Donor', label: 'Anonymous sperm/egg/embryo', popover: anonymousDonor },
                { value: 'Known Donor', label: 'Known sperm/egg/embryo (including partner contributions)', popover: knownDonor },
              ].map((donorOption) => (
                <Checkbox value={donorOption.value} key={donorOption.value} style={{ marginBottom: '10px', fontSize: '1rem ' }}>
                  <Popover content={donorOption.popover} trigger="hover" overlayStyle={{ maxWidth: '300px' }}>
                    <span
                      style={{
                        color: '#007000',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#004d00'}
                      onMouseLeave={(e) => e.target.style.color = '#007000'}
                    >
                      {donorOption.label}
                    </span>
                  </Popover>
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
        )}
  
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: '#007000',
            borderColor: '#007000',
            color: '#fff',
            fontWeight: '500',
            marginTop: '20px',
          }}
        >
          Generate Plan
        </Button>
      </Form>
    )}
  
    {generatedPlan && (
      <div>
        <GeneratedPlan plan={generatedPlan} />
        <Button type="primary" onClick={handleGetNewPlan} style={{ marginTop: '20px' }}>
          Get New Plan
        </Button>
      </div>
    )}
  </>
  
  );
};

export default PlanForm;
