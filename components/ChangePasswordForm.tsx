import { Button, Form } from "antd";
import { Field, Formik } from "formik";
import Router from "next/router";
import * as React from "react";
import { InjectedIntl } from "react-intl";
import { ChangePasswordComponent } from "../generated/apolloComponents";
import withIntl from "../lib/withIntl";
import InputField from "./field/InputField";

export interface IChangePasswordFormProps {
  token: string;
  intl: InjectedIntl;
}

class ChangePasswordForm extends React.Component<IChangePasswordFormProps, {}> {
  public render() {
    const { token, intl } = this.props;
    return (
      <ChangePasswordComponent>
        {changePassword => (
          <Formik
            validateOnBlur={true}
            validateOnChange={true}
            validate={values => {
              const errors: { [key: string]: string } = {};
              if (values.password !== values.repeat_password) {
                errors.repeat_password = intl.formatMessage({
                  id: "passwords_do_not_match",
                  defaultMessage: "Passwords do not match."
                });
              }
              return errors;
            }}
            onSubmit={async values => {
              await changePassword({
                variables: {
                  data: {
                    password: values.password,
                    token
                  }
                }
              });
              Router.push("/");
            }}
            initialValues={{
              password: "",
              repeat_password: ""
            }}
          >
            {({ values, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="password"
                  type="password"
                  placeholder=""
                  value={values.password}
                  component={InputField}
                  required
                  id="passwordField"
                  label={intl.formatMessage({
                    id: "password",
                    defaultMessage: "Password"
                  })}
                />
                <Field
                  name="repeat_password"
                  type="password"
                  placeholder=""
                  value={values.repeat_password}
                  component={InputField}
                  required
                  id="repeatPasswordField"
                  label={intl.formatMessage({
                    id: "repeat_password",
                    defaultMessage: "Repeat password"
                  })}
                />
                <Button type="primary" htmlType="submit">
                  {intl.formatMessage({
                    id: "change_password",
                    defaultMessage: "Change password"
                  })}
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </ChangePasswordComponent>
    );
  }
}

export default withIntl(ChangePasswordForm);
