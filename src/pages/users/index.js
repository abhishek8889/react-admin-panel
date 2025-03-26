import React, { useState } from "react";
import PageLayout from '../layout/component/PageLayout';
import Table from '../../components/table';
import {fetchFromApi} from '../../utils/formHandling';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridReact } from 'ag-grid-react'; 

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

  useState(() => {
    const fetchData = async () => {
      const endpoint = `${process.env.REACT_APP_API_ENDPOINT}users-listing` ;
      const requestData = {
        url:endpoint,
        method: 'GET'
      };
      const result = await fetchFromApi(requestData);
      setTableData(result.data);
    }
    fetchData();
  },[]);

  const tableColoumns = [
    {
      'title' : 'ID',
      'field' : 'id'
    },
    {
      'title' : 'Name',
      'field' : 'name'
    },
    {
      'title' : 'Email',
      'field' : 'email'
    },
    {
      'title' : 'Contact',
      'field' : 'phone'
    },
    {
      'title' : 'Created At',
      'field' : 'created_at'
    }
  ];
  
  const tableOption = {
    search : true,
    pagination : true,
    pageSize : 10,
    pageSizeOptions : [10,20,30,40,50],
    coloumns : tableColoumns,
  }

  return (
    <>
        <PageLayout title={title} subTitle={subtitle} breadcrumbs={breadcrumbs}>
          <Table title={tableTile} tableData={tableData} coloumns={tableColoumns} option={tableOption}></Table>
        </PageLayout>
    </>
  );
};

export default Users;