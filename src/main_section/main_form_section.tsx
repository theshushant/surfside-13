import React from "react";
import LeftFormSection from "../left_section/left_form_section";
import RightFormSection from "../right_section/right_form_section";
import './main_form_section.scss';
import {Formik, Form} from 'formik';
import * as Yup from "yup";


const ValidationProcess = Yup.object().shape({
    // 1: Yup.string().required('Required'),
    2: Yup.string().required('Required'),
    3: Yup.string().required('Required'),
    4: Yup.string().required('Required'),
    5: Yup.string().required('Required'),
    // 6: Yup.string().required('Required'),
    7: Yup.string().required('Required'),
    8: Yup.string().required('Required'),
    9: Yup.string().required('Required'),
    10: Yup.string().required('Required'),
    // 11: Yup.string().required('Required'),
    12: Yup.string().required('Required'),
    13: Yup.string().required('Required'),
    // 14: Yup.string().required('Required'),
    // 15: Yup.string().required('Required'),
    // 16: Yup.string().required('Required'),
    // 17: Yup.string().required('Required'),
});

const MainFromSection = () => {
    return (
        <Formik
            initialValues={{
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: '',
                7: '',
                8: '',
                9: '',
                10: '',
                11: '',
                12: '',
                13: '',
                14: '',
                15: '',
                16: '',
                17: '',
            }}

            validationSchema={ValidationProcess}

            onSubmit={(values, {setSubmitting}) => {

                setTimeout(() => {
                    const finalValue = JSON.stringify(values, null, 2);
                    console.log(finalValue);
                    alert(finalValue);
                    setSubmitting(false);
                }, 400);
            }}>
            {({isSubmitting, errors, touched}) => (
                <div className={"mainFormSection"}>
                    <Form>
                        <LeftFormSection touched={touched} errors={errors}/>
                        <RightFormSection isSubmitting={isSubmitting} touched={touched} errors={errors}/>
                    </Form>
                </div>
            )}

        </Formik>

    );
};

export default MainFromSection;