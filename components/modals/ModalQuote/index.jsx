import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

import Field from "components/formik/Field";
import Select from "components/formik/Select";
import Button from "components/common/Button";
import Options from "components/formik/Options";

import styles from "../style.module.scss";
import { useState } from "react";
import axios from "axios";
import { hideModal } from "../../../store/actions/modals";
import { MODAL_CONTACTS_US, MODAL_REQUEST_QUOTE } from "../../../logic/constants";
import { useDispatch } from "react-redux";
import MySelect from "../../common/CustomSelect/MySelect";
import Router from "next/router";

export default function ModalQuote() {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([])
  const onSubmit = async (values) => {
    const data = {...values, topic: topicValue, budget:selectedOption}
    let config = {
      method: 'post',
      url: `/api/quote`,
      headers: {
        'Content-Type': 'application/json',
      },
      data
    }
    try {
      const response = await axios(config)
      await Router.push('/thank-you')
      dispatch(hideModal(MODAL_REQUEST_QUOTE))
    } catch (e) {
      setErrors([...errors, e])
      console.error(e)
    }
  };


  const [selectedOption, setSelectedOption] = useState('')
  const [topicValue, setTopicValue] = useState('')

  const options= [
    { id: 1, name: "Web Development" },
    { id: 2, name: "UX / UI Design" },
    { id: 3, name: "Mobile Development" },
    { id: 4, name: "Mobile Design" },
    { id: 5, name: "Ongoing support" },
    { id: 6, name: "QA testing" },
    { id: 7, name: "Branding" },
  ]


  return (
    <>
      <h3 className={styles.title}>Get a Free Quote</h3>
      <div className={styles.description}>
        <p>
          fill out the form below to submit an application, we will contact you
          shortly.
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Error").required("Error"),
        })}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off" className={styles.form}>
          <MySelect
            optionsList={options}
            defaultText='Please select'
            setTopicValue={setTopicValue}
          />
          <Field className={styles.field} name="email" label="Email" />
          <Options
            className={styles.options}
            label="Project budget (USD)"
            list={["5k-24k", "25k-49k", "50k-99k", "100k+"]}
            selected={selectedOption}
            setSelected={setSelectedOption}
          />
          {errors.length !== 0 && errors.map(({ message }, index) => (<p key={index} style={{color: 'red'}}>{message}</p>))}
          <Button type="submit" secondary className={styles.btn}>
            Send an application
          </Button>
        </Form>
      </Formik>
    </>
  );
}
