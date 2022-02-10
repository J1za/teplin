import { Formik, Form } from "formik";
import * as Yup from "yup";
import Field from "components/formik/Field";
import Textarea from "components/formik/Textarea";
import Button from "components/common/Button";
import Options from "components/formik/Options";
import styles from "../style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { hideModal } from "../../../store/actions/modals";
import { MODAL_REQUEST_QUOTE, MODAL_SERVICE } from "../../../logic/constants";
import Router from "next/router";

const ModalService = () => {
  const modalTitle = useSelector((state) => state.ModalReducer.modalTitle);
  const [errors, setErrors] = useState([])
  const [selectedOption, setSelectedOption] = useState(0)
  const dispatch = useDispatch()

  const onSubmit = async (values) => {
    const data = {...values, budget:selectedOption, modalTitle}
    let config = {
      method: 'post',
      url: `/api/services`,
      headers: {
        'Content-Type': 'application/json',
      },
      data
    }
    try {
      const response = await axios(config)
      await Router.push('/thank-you')
      dispatch(hideModal(MODAL_SERVICE))
    } catch (e) {
      setErrors([...errors, e])
      console.error(e)
    }
  };

  return (
    <>
      <h3 className={styles.title}>
          {modalTitle}
      </h3>
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
          <Textarea className={styles.largeField} name="comment" label="Comment" />
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
};

export default ModalService;
