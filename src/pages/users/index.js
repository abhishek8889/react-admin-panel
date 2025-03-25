import React, { useState } from "react";
import PageLayout from '../layout/component/PageLayout';
import Table from '../../components/table';
import {fetchFromApi} from '../../utils/formHandling';


const Users = () => {
  const title = 'Users';
  const subtitle =  'All user listing';
  const tableTile = 'Users';
  const breadcrumbs = [
    {
      'title' : 'users',
      'url' : '/users'
    }
  ];

  const [tableData, setTableData] = useState([])

  // useState(() => {
  //   const endpoint = `${process.env.REACT_APP_API_ENDPOINT}users` ;
  //   const requestData ={
  //     url:endpoint,
  //     method: 'GET'
  //   };

  //   fetchFromApi('users').then(res => {
  //     setTableData(res.data)
  //   })
  // });

  return (
    <>
        <PageLayout title={title} subTitle={subtitle} breadcrumbs={breadcrumbs}>
            <Table title={tableTile} tableData={tableData}></Table>
        </PageLayout>
    </>
  );
};

export default Users;