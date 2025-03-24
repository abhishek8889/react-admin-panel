import React from "react";
import PageLayout from "../layout/component/PageLayout";

const Settings = () => {
  const title = 'Settings';
  const subtitle =  'Welcome to the Settings.';
  
  return (
    <>
      <PageLayout title={title} subTitle={subtitle}>
        <h1>Settings</h1>
      </PageLayout>
    </>
  );
}

export default Settings;