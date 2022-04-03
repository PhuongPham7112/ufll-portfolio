import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Phase 1: Trigger (2 weeks)',
    Objective: `Draw attention and attract curiosity from target audience. 
    Raise awareness about peer pressure, create discussion among netizen.`,
    KeyHook: '"Peer Pressure, Is it Real or Just an Excuse". 10 second teaser with hints and keywords (hashtags)',
    Tactic: 'Landing page: Illustrate a countdown timer and a flower bud, which grow day by day and fully bloom when the time\'s over. KOL/ Influencer: Successful Gen Z post status sharing their opinion about peer pressure. Youtube/Facebook ads: to promote teaser clip PR articles. In news websites for Gen Z (Vietcetera, Kenh14,..). In Facebook pages, groups'
  },
  {
    label: 'Phase 2: Engagement (4 weeks)',
    Objective: 'Inspire customers to overcome peer pressure, refresh their mind, clear all the negativity and anxiety, peer pressure. Inform them our new products which can be their companion on this journey.',
    KeyHook: 'TVC: Introducing new Products. Emphasize on how the new Products can clear your head both inside and outside. It retains the Anti-Dandruff feature and what makes it special is its  Floral Essence which can blow away every negativity and anxiety. Keep your head refreshing, help you concentrate on achieving goals. Music Video - A collaboration MV “Cho ngay no ro”(Late blossom) with a celebrity to spread the campaign message through trendy lyrics, catchy melody and stunning visuals - “Flowers don\'t worry about how they\'re going to bloom. They just open up and turn toward the light and that makes them beautiful”.',
    Tactic: 'Youtube/Facebook ads: Promote TVC and MV Posts About Peer Pressure, its effect and how to overcome it. Use Facebook ads to reach more audience. PR articles: In news, websites, fanpages for Gen Z, PR the MV and TVC. Social Seeding: From KOL/Influencer Display Buildings\' elevators (universities, shopping malls, cinemas),Bus stops. POSM : Vinmart, BigC.'
  },
  {
    label: 'Phase 3: Amplify (3 weeks)',
    Objective: `Emphasize each individual's uniqueness and give youth a space to share. Encourage them to use our new Products to #ClearHeadGetBlossom.`,
    KeyHook: 'Tik Tok contest: Use music from MV in phase 2 to build their own freestyle video and the requirement is to spread the campaign key message #ClearHeadGetBlossom. Story and Photo contest: Contestants tell about their peer pressure stories and take a picture of themselves with one of clear products, which will be posted on Clear facebook fan page with hashtag.',
    Tactic: 'Brand Ambassadors: Gen Z celebrities (Mỹ Anh, Tlinh, Tun Phạm, Long Chun, Wren, Khánh Vy, Thảo Tâm,...). Ads on online shopping platforms: Shopee, Lazada, Tiki with Discount and Vouchers. Google Ads. Fanpage post: Tips for Gen Z to develop more. Display and POSM: Same as phase 2.'
  },
];

export default function StepperCampaign() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <p className='p-line' style={{fontWeight: "500"}}
            >
              {step.label}
            </p>
            <StepContent>
              <p><span className='emphasis'>Objective:</span> {step.Objective}</p>
              <p><span className='emphasis'>Key Hook: </span>{step.KeyHook}</p>
              <p><span className='emphasis'>Tactic: </span>{step.Tactic}</p>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </div>
      )}
    </Box>
  );
}