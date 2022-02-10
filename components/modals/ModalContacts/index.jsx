import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios'

import Field from "components/formik/Field";
import Button from "components/common/Button";

import styles from "../style.module.scss";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../store/actions/modals";
import { MODAL_CONTACTS_US } from "../../../logic/constants";
import MySelect from "../../common/CustomSelect/MySelect";
import { useState } from "react";
import Router from 'next/router'
export default function ModalContacts() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const options = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "UX / UI Design" },
    { id: 3, name: "Mobile Development" },
    { id: 4, name: "Mobile Design" },
    { id: 5, name: "Ongoing support" },
    { id: 6, name: "QA testing" },
    { id: 7, name: "Branding" },
  ]
  const [topicValue, setTopicValue] = useState('')
  const onSubmit = async (values) => {
    const data = {...values, topic: topicValue}
    let config = {
      method: 'post',
      url: `/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data
    }
    try {
      const response = await axios(config)
      await Router.push('/thank-you')
      dispatch(hideModal(MODAL_CONTACTS_US))
    } catch (e) {
      setErrors([...errors, e])
      console.error(e)
    }

  };
  return (
    <>
      <h3 className={styles.title}>Contact us</h3>
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
          <Field className={styles.field} name="email" label="Email" />
          <MySelect
            optionsList={options}
            defaultText='Please select'
            setTopicValue={setTopicValue}
          />
          {errors.length !== 0 && errors.map(({ message }, index) => (<p key={index} style={{color: 'red'}}>{message}</p>))}
          <Button type="submit" secondary className={styles.btn}>
            Send an application
          </Button>
        </Form>
      </Formik>
      <div className={styles.socials}>
        <div className={styles.socialsTitle}>
          Let’s chat. <span>We’re online!</span>
        </div>
        <ul className={styles.socialsList}>
          <li>
            <a href="https://telegram.me/agency_v" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-telegram.svg"
                alt=""
                loading="lazy"
                decoding="async"
                style={{ transform: "translateX(-1px)" }}
              />
            </a>
          </li>
          <li>
            <a href="https://wa.me/380990707815" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-whatsapp.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
          <li>
            <a href="skype:3809907070815?chat" target="_blank" rel="noreferrer">
              <img
                src="/img/icons/socials-skype.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
