import React from "react";
import PageLayout from '../layout/component/PageLayout';
// import {submitForm} from '../../utils/common';
import FormBox from '../../components/FormBox';
const CreateNewPost = () => {
    const title = 'New Post';
    const subtitle =  'create new post here';
    const breadcrumbs = [
        {
            'title' : 'posts',
            'url' : '/posts'
        },
        {
            'title' : 'create',
            'url' : '/posts/create-new'
        }        
    ]
    const formTitle = 'Fill the form to create new post';
    return (
        <>
            <PageLayout title={title} subTitle={subtitle} breadcrumbs={breadcrumbs}>
                <FormBox title={formTitle}></FormBox>
            </PageLayout>
        </>
    );
}

export default CreateNewPost;