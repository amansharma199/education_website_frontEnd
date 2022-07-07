import "./faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function FAQ() {
    return (

        <>
            <div className="faq" id="faq">
                <div className="wrapper">
                    <div className="faq_heading">
                        <h1>FAQ</h1>
                        <p>Frequently Asked Questions</p>
                    </div>

                    <div>
                    
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<i class="fa-solid fa-caret-down"></i>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>What is Front End Developer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<i class="fa-solid fa-caret-down"></i>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>How to became a Full Stack Developer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion >
                            <AccordionSummary
                                expandIcon={<i class="fa-solid fa-caret-down"></i>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>How to Became a Python Developer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}
