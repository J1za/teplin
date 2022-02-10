import { useState } from "react";
import Router from 'next/router'
import Link from "next/link";

import styles from "./style.module.scss";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Field from "components/formik/Field";
import Button from "components/common/Button";

import MultiSelect from "components/formik/MultiSelect";
import Options from "components/formik/Options";

import classnames from "classnames";

export default function form({ careerForm }) {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Error").required("Error"),
        name: Yup.string().min(2).required("Error")
    })
    const [selectedOption, setSelectedOption] = useState('');
    const [errors, setErrors] = useState([])

    const fileSelectedInitial = {
        name: "Add attachment",
        file: null,
        selected: false
    }
    {careerForm ? fileSelectedInitial.name = 'Add your CV' : null}
    
    const [fileSelected, setFileSelected] = useState(fileSelectedInitial);
    const resetFileName = () => {
        setFileSelected(fileSelectedInitial)
    }

    const optionsSelect = [
        { id: 1, name: "Web Development" },
        { id: 2, name: "UX / UI Design" },
        { id: 3, name: "Mobile Development" },
        { id: 4, name: "Mobile Design" },
        { id: 5, name: "Ongoing support" },
        { id: 6, name: "QA testing" },
        { id: 7, name: "Branding" }
    ]
    const onSubmit = async (values) => {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('email', values.email)
        { careerForm && formData.append('linkcv', values.linkcv) }
        {
            !careerForm &&
            formData.append('budget', selectedOption)
            for (let i = 0; i < values.interested.length; i++) {
                formData.append('interested[]', values.interested[i])
            }
        }
        formData.append('file', fileSelected.file)
        let config = {
            method: 'post',
            url: `/api/${!careerForm?'contactPage':'careerForm'}`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData
        }
        try {
            const response = await axios(config)
            await Router.push('/thank-you')
        } catch (e) {
            setErrors([...errors, e])
            console.error(e)
        }

    };
    return (
        <div className={styles.form}>
            <Formik
                initialValues={{
                    interested: [],
                    name: "",
                    email: "",
                    linkcv: ""
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({
                    values,
                    setFieldValue
                }) => (
                    <Form autoComplete="off" className={styles.form}>
                        <div className={styles.form__multiselect}>

                            {!careerForm &&
                                <>
                                    <h2>I'm interested in...</h2>
                                    <div className={styles.form__multiselect_wrap}>
                                        {optionsSelect.map(elem => {
                                            return (
                                                <MultiSelect
                                                    id={elem.id}
                                                    name="interested"
                                                    type="checkbox"
                                                    label={elem.name}
                                                    value={elem.name}
                                                />
                                            )
                                        })}
                                    </div>
                                </>
                            }
                        </div>
                        <div className={styles.form__fullname}>
                            <Field contactPage className={styles.field} name="name" label="Your Name" placeholder="Your Name" />
                            <Field contactPage className={styles.field} name="email" label="Your Email" placeholder="Your Email" />
                            {careerForm && <Field contactPage className={styles.field} name="linkcv" label="Link to your CV" placeholder="Link to your CV" />}
                        </div>
                        {!careerForm &&
                            <Options
                                className={styles.budget}
                                pageContact
                                label="Project budget (USD)"
                                list={["5k-24k", "25k-49k", "50k-99k", "100k+"]}
                                selected={selectedOption}
                                setSelected={setSelectedOption}
                            />
                        }

                        <div className={styles.attachment}>
                            <input id="file" name="file" type="file" onChange={(event) => {
                                setFieldValue("file", event.currentTarget.files[0]);
                                setFileSelected({
                                    name: event.currentTarget.files[0].name,
                                    file: event.currentTarget.files[0],
                                    selected: true
                                })
                            }} />
                            <label className={styles.fileInput} htmlFor="file">
                                {fileSelected.selected ? <FileIcon /> : <Clip />}
                                {fileSelected.name}
                            </label>
                            {fileSelected.selected &&
                                <div className={styles.attachment__close} onClick={() => (resetFileName(), setFieldValue("file", ""))}>
                                    <CloseIcon />
                                </div>
                            }
                        </div>
                        <div className={classnames(styles.btn, {
                            [styles.minbtn]: careerForm
                        })}>
                            <Button type="submit" secondary contactBtn>
                                {!careerForm ? 'Start a Project' : 'Send'}
                            </Button>
                            <p className={styles.policy}>By clicking the Send Request button you agree to our <Link href='/policy'>Privacy Policy
                            </Link> terms</p>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const Clip = () => (
    <svg className={styles.fileIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_1199_792)">
            <path d="M22.405 4.04465C21.3748 3.01442 20.0051 2.44709 18.5482 2.44709C17.0913 2.44709 15.7216 3.01442 14.6914 4.04465L6.09334 12.6426C4.81738 13.9186 4.81738 15.9948 6.09342 17.2709C7.36945 18.5468 9.44568 18.5468 10.7216 17.2707L16.3833 11.6091C16.8093 11.183 16.8093 10.4924 16.3833 10.0664C15.9573 9.64033 15.2666 9.64033 14.8406 10.0664L9.17892 15.728C8.75362 16.1534 8.0615 16.1534 7.63613 15.7281C7.21076 15.3027 7.21076 14.6106 7.63606 14.1853L16.2341 5.58744C16.8523 4.96934 17.6741 4.62892 18.5482 4.62892C19.4224 4.62892 20.2442 4.96934 20.8623 5.58744C22.1382 6.86347 22.1383 8.93962 20.8624 10.2157L11.493 19.5848C9.36626 21.7115 5.90593 21.7114 3.77938 19.5848C2.74915 18.5547 2.18175 17.185 2.18175 15.7281C2.18175 14.2712 2.74915 12.9014 3.77938 11.8712L13.1485 2.50186C13.5746 2.07583 13.5746 1.38516 13.1485 0.959139C12.7226 0.533188 12.0319 0.533115 11.6058 0.959139L2.23666 10.3285C0.794303 11.7707 0 13.6884 0 15.7281C0 17.7678 0.794303 19.6854 2.23666 21.1276C3.72549 22.6164 5.68048 23.3608 7.63613 23.3606C9.59134 23.3604 11.5472 22.6161 13.0357 21.1276L22.4051 11.7583C24.5317 9.6316 24.5316 6.17134 22.405 4.04465Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_1199_792">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
const FileIcon = () => (
    <svg className="file" width="24" height="24" viewBox="0 0 24 24">
        <g clip-path="url(#clip0_997_1738)">
            <path d="M12.9375 17.5312C12.9375 18.049 12.5178 18.4688 12 18.4688H6.46875C5.95097 18.4688 5.53125 18.049 5.53125 17.5312C5.53125 17.0135 5.95097 16.5938 6.46875 16.5938H12C12.5178 16.5938 12.9375 17.0135 12.9375 17.5312ZM24 5.63203V16.6094C24 18.0488 23.4395 19.402 22.4216 20.4198L20.4198 22.4217C19.402 23.4395 18.0488 24 16.6094 24H5.63203C2.51902 24 0 21.4807 0 18.368V5.63203C0 2.51902 2.5193 0 5.63203 0H18.368C21.481 0 24 2.5193 24 5.63203ZM21.9992 17.5469H19.4219C18.388 17.5469 17.5469 18.388 17.5469 19.4219V21.9992C18.1263 21.8399 18.6574 21.5323 19.0939 21.0959L21.0958 19.0939C21.5323 18.6574 21.8399 18.1263 21.9992 17.5469ZM22.125 5.63203C22.125 3.55542 20.4445 1.875 18.368 1.875H5.63203C3.55542 1.875 1.875 3.55552 1.875 5.63203V18.368C1.875 20.4446 3.55552 22.125 5.63203 22.125H15.6719V19.4219C15.6719 17.3541 17.3541 15.6719 19.4219 15.6719H22.125V5.63203ZM17.5312 11.0625H6.46875C5.95097 11.0625 5.53125 11.4822 5.53125 12C5.53125 12.5178 5.95097 12.9375 6.46875 12.9375H17.5312C18.049 12.9375 18.4688 12.5178 18.4688 12C18.4688 11.4822 18.049 11.0625 17.5312 11.0625ZM17.5312 5.53125H6.46875C5.95097 5.53125 5.53125 5.95097 5.53125 6.46875C5.53125 6.98653 5.95097 7.40625 6.46875 7.40625H17.5312C18.049 7.40625 18.4688 6.98653 18.4688 6.46875C18.4688 5.95097 18.049 5.53125 17.5312 5.53125Z" />
        </g>
        <defs>
            <clipPath id="clip0_997_1738">
                <rect width="24" height="24" />
            </clipPath>
        </defs>
    </svg>
)
const CloseIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path opacity="0.4" d="M9.71258 0.307403L6 4.01999L2.28742 0.307403C1.87755 -0.102468 1.21225 -0.102468 0.802384 0.307403L0.307403 0.802384C-0.102468 1.21225 -0.102468 1.87755 0.307403 2.28742L4.01999 6L0.307403 9.71258C-0.102468 10.1225 -0.102468 10.7877 0.307403 11.1976L0.802384 11.6926C1.21225 12.1025 1.87755 12.1025 2.28742 11.6926L6 7.98001L9.71258 11.6926C10.1225 12.1025 10.7877 12.1025 11.1976 11.6926L11.6926 11.1976C12.1025 10.7877 12.1025 10.1225 11.6926 9.71258L7.98001 6L11.6926 2.28742C12.1025 1.87755 12.1025 1.21225 11.6926 0.802384L11.1976 0.307403C10.7877 -0.102468 10.1225 -0.102468 9.71258 0.307403Z" fill="#687086" />
    </svg>
)