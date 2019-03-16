import { Field, Formik, FormikActions } from 'formik';
import React from 'react';
import { FormattedMessage, InjectedIntl } from 'react-intl';
import { Form, FormGroup, Label } from 'reactstrap';
import MyEditor from '../../components/Editor';
import ErrorAlert from '../../components/ErrorAlert';
import InputField from '../../components/field/InputField';
import SaveButton from '../../components/SaveButton';
import {
  CreatePostMutation,
  EditPostMutation
} from '../../generated/apolloComponents';
import { parseGraphQlValidationError } from '../../lib/error';
import withIntl from '../../lib/withIntl';

export type Result = {
  data: EditPostMutation | CreatePostMutation;
};

export interface EditorProps {
  title: string;
  content: string;
  slug: string;
}

export interface Props extends EditorProps {
  intl: InjectedIntl;
  onSave?: (values: any) => void;
  save: (values: EditorProps) => Result;
}

export type State = {
  loading: boolean;
  complete: boolean;
  error: string | null;
};

class PostForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      complete: false,
      error: null
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.hideError = this.hideError.bind(this);
    this.setIdle = this.setIdle.bind(this);
  }

  setLoading() {
    this.setState({ complete: false, loading: true, error: null });
  }

  setComplete() {
    this.setState({ complete: true, loading: false });
  }

  setIdle() {
    this.setState({ complete: false, loading: false });
  }

  showError(err: string) {
    this.setState({
      error: err
    });
  }

  hideError() {
    this.setState({
      error: null
    });
  }

  async onSubmitHandler(
    values: EditorProps,
    { setErrors }: FormikActions<EditorProps>
  ) {
    const { intl, save, onSave } = this.props;
    this.setLoading();
    try {
      const result = await save(values);
      if (result && result.data) {
        this.setComplete();
        if (onSave) {
          onSave(result.data);
        }
      } else {
        throw new Error(
          intl.formatMessage({
            id: 'something_went_wrong',
            defaultMessage: 'Something went wrong.'
          })
        );
      }
    } catch (err) {
      this.setIdle();
      const valErrors = parseGraphQlValidationError(err);
      if (valErrors) {
        setErrors(valErrors);
      } else {
        this.showError(err);
      }
    }
  }

  public render() {
    const { title, content, slug, intl } = this.props;
    return (
      <div className="post-form">
        <ErrorAlert onDismiss={this.hideError} error={this.state.error} />
        <Formik
          enableReinitialize
          validateOnBlur={false}
          initialValues={{ title, slug, content }}
          onSubmit={this.onSubmitHandler}
          validate={this.setIdle}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="title"
                type="title"
                placeholder=""
                value={values.title}
                component={InputField}
                required
                id="titleField"
                label={intl.formatMessage({
                  id: 'title',
                  defaultMessage: 'Title'
                })}
                autoFocus
                autoComplete="off"
              />
              <Field
                name="slug"
                type="emaslugil"
                placeholder=""
                value={values.slug}
                component={InputField}
                required
                id="emailField"
                label={intl.formatMessage({
                  id: 'slug',
                  defaultMessage: 'Slug'
                })}
                autoComplete="off"
              />
              <FormGroup>
                <Label>
                  <FormattedMessage id="content" defaultMessage="Content" />
                </Label>
                <MyEditor
                  content={content}
                  onChange={value => setFieldValue('content', value)}
                />
              </FormGroup>
              <FormGroup>
                <SaveButton
                  loading={this.state.loading}
                  complete={this.state.complete}
                />
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withIntl(PostForm);