import React from 'react';


const PlanForm = () => {

//TODO: Create form, decide on implementing API call directly in component or setup different file
//will use placeholders for form so that i can finish client routing setup 

  return (
    <form className="conception-plan-form">
    
      <label>Method Choice:</label>
      <input type="checkbox" name="methodChoice" />

      <label>Donor Preference:</label>
      <input type="text" name="donorPreference" />

      <label>Known Fertility Issues:</label>
      <input type="text" name="fertilityIssues" />

      <label>Timeline:</label>
      <input type="text" name="timeline" />

      <button type="submit">Generate Plan</button>
    </form>
  );
};

export default PlanForm;