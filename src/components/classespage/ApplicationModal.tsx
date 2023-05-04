import { Formik, FormikHelpers } from "formik";
import Modal from '@mui/material/Modal';
import * as Yup from "yup";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";

type FormProps = {
  readonly name: string;
  readonly email: string;
  readonly comment: string;
  readonly phone: number;
}

type ApplicationModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ApplicationModal = (props: ApplicationModalProps) => {

  const handleClose = () => {
    props.setIsOpen(false);
  }

  const handleSubmitting = (
    values: FormProps, {setSubmitting, resetForm}: FormikHelpers<any>
  ) => {
    console.log(values);
    resetForm();
    setSubmitting(false);
    handleClose();
  }

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    comment: Yup.string(),
    phone: Yup.number().required('Required').min(0),
  })


  return (
    <Modal
      open={props.isOpen}
      onClose={handleClose}
    >
      <div className="bg-transparent flex justify-center items-center w-full h-full">
        <Formik
          initialValues={{
            name: '',
            email: '',
            comment: '',
            phone: -1,
          }}
          validationSchema={formSchema}
          onSubmit={handleSubmitting}
          validateOnMount
          enableReinitialize
        >
          {({ isSubmitting, handleSubmit, isValid, setFieldValue }) => {

            return (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl px-2">
                <DialogContent>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <h4 className="font-sedgwick text-3xl">Enrolment Form</h4>
                    </div>
                    <div>
                      <TextField label="Name" variant="outlined" required
                        onChange={(event: any): void => 
                          setFieldValue('name', event.target.value)
                        } />
                    </div>
                    <div>
                      <TextField label="Email" variant="outlined" required
                      onChange={(event: any): void => 
                        setFieldValue('email', event.target.value)
                      } />
                    </div>
                    <div>
                      <TextField label="Phone" variant="outlined" required
                      onChange={(event: any): void => 
                        setFieldValue('phone', event.target.value)
                      } />
                    </div>
                    <div>
                      <TextField label="Comment" variant="outlined"
                      onChange={(event: any): void => 
                        setFieldValue('comment', event.target.value)
                      } />
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => handleSubmit()} 
                    disabled={!isValid || isSubmitting}>
                      Submit
                  </Button>
                  <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
              </form>
            )

          }}
        </Formik>
      </div>
    </Modal>
  )
}

// use formik for modal
// use schema to validate data

export default ApplicationModal