"use client"
import React, { ChangeEvent } from 'react';
import { useSendEmail } from '@/hooks/contact';
import { Formik, useFormikContext } from "formik";
import { object, string } from "yup";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormComponent = () => {
  const { mutateAsync: sendMessage } = useSendEmail();
  const [serverErrors, setServerErrors] = React.useState<string[] | null>(null);
  const [version, setVersion] = React.useState<number>(0);
  const [isMessageSent, setIsMessageSent] = React.useState<boolean>(false);

  const initialState: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  const schemeValidation = () =>
    object({
      name: string().required('Name is required'),
      email: string().email('Invalid email').required('Email is required'),
      message: string().required('Message is required'),
    });

  const onSubmit = async (values: FormValues) => {
    const response = await sendMessage(values);
    setServerErrors(response.errors ?? null);
    if (response.success) {
      setVersion((version) => version + 1);
      setIsMessageSent(true);
    }
  };

  return (
    <div className="pb-12 relative">
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={schemeValidation()}
        enableReinitialize
        key={version}
      >
        <>
          <FormFields
            serverErrors={serverErrors}
            onChangeValues={() => {
              setServerErrors(null);
              setIsMessageSent(false);
            }}
          />
          {isMessageSent && (
            <div className="absolute">
              <p className="mt-4 text-green-600 dark:text-green-400">
                Thank you for your message! I will get back to you as soon as possible.
              </p>
            </div>
          )}
        </>
      </Formik>
    </div>
  );
};

type PropsFields = {
  serverErrors?: string[] | null;
  onChangeValues: (values: FormValues) => void;
};

const FormFields = ({ serverErrors, onChangeValues }: PropsFields) => {
  const { values, isSubmitting, isValid, errors, submitForm, handleChange } =
    useFormikContext<FormValues>();

  const onChangeHandler = (e: ChangeEvent) => {
    onChangeValues(values);
    handleChange(e);
  };

  return (
    <>
      <div className="relative pb-8">
        <input
          type="text"
          placeholder="Name"
          className="input mb-0"
          name="name"
          value={values.name}
          onChange={onChangeHandler}
        />
        {errors.name && <p className="text-red-600 dark:text-red-400 absolute left-0">{errors.name}</p>}
      </div>
      <div className="relative pb-8">
        <input
          type="email"
          placeholder="Email"
          className="input mb-0"
          name="email"
          value={values.email}
          onChange={onChangeHandler}
        />
        {errors.email && <p className="text-red-600 dark:text-red-400 absolute left-0">{errors.email}</p>}
      </div>
      <div className="relative pb-8 mb-8">
        <textarea
          placeholder="Message"
          className="input min-h-44 mb-0"
          name="message"
          value={values.message}
          onChange={onChangeHandler}
        />
        {errors.message && <p className="text-red-600 dark:text-red-400 absolute left-0">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="primary-button"
        disabled={!isValid || isSubmitting}
        onClick={submitForm}
      >
        Submit
      </button>
      {serverErrors && (
        <div className="absolute">
          <p className="mt-4 text-red-600 dark:text-red-400">{serverErrors.join(', ')}</p>
        </div>
      )}
    </>
  );
};

const queryClient = new QueryClient();
export const ContactForm = () => {
    return  <QueryClientProvider client={queryClient}>
        <ContactFormComponent />
    </QueryClientProvider>
}