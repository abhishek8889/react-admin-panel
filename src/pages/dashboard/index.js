import React from "react";
import AdminLayout from '../layout/component/AdminLayout';
import PageLayout from "../layout/component/PageLayout";
import { Table } from "react-bootstrap";
import DashboardCard from "../../components/dashboardCard";
const Dashboard = () => {
  const title = 'Dashboard';
  const subtitle =  'Welcome to the dashboard.';
  
  const DashboardCardData = [
    {
      "title" : "$53k",
      "subtitle" : "Today's Money",
      "icon" : <i className="material-symbols-rounded opacity-10">weekend</i>,
      "cardFooter": <span className="text-success font-weight-bolder">+55% </span>,
      "cardFooterText" : "than last week"
    },
    {
      "title" : "2300",
      "subtitle" : "Today's Users",
      "icon" : <i className="material-symbols-rounded opacity-10">person</i>,
      "cardFooter": <span className="text-success font-weight-bolder">+3% </span>,
      "cardFooterText" : "than last month"
    },
    {
      "title" : "$103,430",
      "subtitle" : "Sales",
      "icon" : <i className="material-symbols-rounded opacity-10">weekend</i>,
      "cardFooter": <span className="text-success font-weight-bolder">+3% </span>,
      "cardFooterText" : "than yesterday"
    }
  ]
  return (
    <>
      <PageLayout title={title} subTitle={subtitle}>
        {DashboardCardData && DashboardCardData.map((data,index) => {
          return <DashboardCard key={index} title={data.title} subTitle={subtitle} icon={data.icon} cardFooter={data.cardFooter} cardFooterText={data.cardFooterText} />
        })}
      </PageLayout>
      
    </>
  );
}

export default Dashboard;