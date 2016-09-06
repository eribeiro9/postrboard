import React from 'react';

import { AppLayout } from '../../layouts';

export const LandingPage = () => (
  <AppLayout>
    <div>
      <div className="landing-title-section">
        <span className="landing-header">Postrboard</span>
        <span className="landing-subheader">Post some shit then get the fuck out!</span>
      </div>
      <div className="landing-purpose-section">
        <span className="landing-purpose">I do what I want!</span>
      </div>
    </div>
  </AppLayout>
);
