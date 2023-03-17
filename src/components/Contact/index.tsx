import React from 'react';
import PageSection from '../ui/PageSection';
import SectionTitle from '../ui/SectionTitle';
import Paragraph from '../ui/paragraph';
import Button from '../ui/Button';

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <PageSection id="contact">
      <div className='space-y-6'>
        <SectionTitle className="text-center text-4xl">Get in touch</SectionTitle>
        <div className='text-center space-y-4'>
          <Paragraph className="">
            To say hello, or to discuss interesting job opportunities, I would
            love to hear from you.
          </Paragraph>
          <Button className='text-center'>
            <a href="mailto:drozdik.svk@gmail.com">
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </PageSection>
  );
}

export default ContactMe
