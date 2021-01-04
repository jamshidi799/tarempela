import React from 'react';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: '60px 0px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

export default function Questions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <h3 className={classes.heading}>سوال اول</h3>
          <h3 className={classes.secondaryHeading}>چگونه باید سفارش بدهیم</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            در حال حاضر امکان سفارش آنلاین از طریق سایت وجود ندارد و باید به شماره تماسی که در سایت و یا روی کیسه‌های برنج درج شده است تماس
            بگیرید اما تیم امکان سفارش آنلاین نیز به‌زودی فراهم می‌شود.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <h3 className={classes.heading}>سوال دوم</h3>
          <h3 className={classes.secondaryHeading}>روش ارسال چگونه است</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            مجموعه طارم‌پلا از دو طریق پست و باربری برنج‌ها را ارسال می‌کند. بنابراین هنگام ثبت سفارش شما تعیین می‌کنید که با کدام روش
            راحت‌تر هستید. البته معمولا باربری کم هزینه‌تر است.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <h3 className={classes.heading}>سوال سوم</h3>
          <h3 className={classes.secondaryHeading}>طریقه صحیح پخت برنج چگونه است</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            به پست{' '}
            <Link href="/blog/cook" passHref>
              <a className="route-link">روش صحیح پخت برنج</a>
            </Link>{' '}
            مراجعه کنید
          </p>
        </AccordionDetails>
      </Accordion>
      <style jsx>
        {`
          .route-link {
            color: #04ff04;
          }
        `}
      </style>
    </div>
  );
}
