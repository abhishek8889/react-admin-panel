import React from "react";
import PageLayout from '../layout/component/PageLayout';
import Table from '../../components/table';

const Posts = () => {
  const title = 'Posts';
  const subtitle =  'All posts are here';
  const tableTile = 'Posts';
  const breadcrumbs = {
    'title' : 'posts',
    'url' : '/posts'
  }
  return (
    <>
      <PageLayout title={title} subTitle={subtitle} breadcrumbs={breadcrumbs}>
          <Table title={tableTile}></Table>
      </PageLayout>
    </>
  );
};

export default Posts;