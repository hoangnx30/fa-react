import { Typography, Input, Select, Button } from "antd";

import dayjs, { Dayjs } from "dayjs";
import { useFormik } from "formik";
import * as Yup from "yup";

import DatePicker from "./components/DatePicker";

import {
  GENDER,
  LIST_OBJECT,
  DEFAULT_OPTION,
} from "./constants/component.constant";

import "./App.scss";
import { SubForm } from "./components/SubForm/SubForm";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required(),
  object: Yup.string().required(),
  dateOfBirth: Yup.string().required(),
  gender: Yup.string().required(),
  travels: Yup.array().of(
    Yup.object().shape({
      departureDate: Yup.string().required(),
    })
  ),
  symptoms: Yup.string().required(),
  vaccines: Yup.string().required(),
});

export interface ISubForm {
  departureDate: string | dayjs.Dayjs;
  test: string;
}

interface IInitialValues {
  fullName: string;
  object: string;
  dateOfBirth: dayjs.Dayjs | string;
  gender: string;
  travels: ISubForm[];
  symptoms: string;
  vaccines: string;
}

const initialSubFormValue = {
  departureDate: dayjs(),
  test: "",
};

const { Option } = Select;
function App() {
  const formiks = useFormik<IInitialValues>({
    initialValues: {
      fullName: "",
      object: "",
      dateOfBirth: dayjs(),
      gender: "",
      travels: [],
      symptoms: "",
      vaccines: "",
    },
    onSubmit: (values) => {
      values.dateOfBirth = dayjs(values.dateOfBirth).format();
      console.log(values);
    },
    validationSchema,
  });

  const renderListObject = () => {
    return LIST_OBJECT.map((obj, idx) => {
      return (
        <Option key={idx} value={obj}>
          {obj}
        </Option>
      );
    });
  };

  const handleChangeObject = (value: string) => {
    console.log(value);

    if (value === DEFAULT_OPTION) {
      formiks.setFieldValue("object", null);
    } else {
      formiks.setFieldValue("object", value);
    }
  };

  console.log(formiks.values);

  const handleChangeDob = (value: Dayjs | null) => {
    formiks.setFieldValue("dateOfBirth", value);
  };

  const handleChangeGender = (value: string) => {
    formiks.setFieldValue("gender", value);
  };

  const handleAddMoreTravel = () => {
    const travels = formiks.values.travels.concat([initialSubFormValue]);
    formiks.setFieldValue("travels", travels);
  };

  const handleDeleteTravel = (idx: number) => {
    const travels = formiks.values.travels.filter((_, index) => {
      return idx !== index;
    });
    formiks.setFieldValue("travels", travels);
  };

  return (
    <>
      <div className="medical-form">
        <div className="header">
          <Typography>MEDICAL DECLARATION FORM FOR FOREIGN ENTRY</Typography>
        </div>

        <div>
          <p>Personal information:</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            formiks.handleSubmit();
          }}
        >
          <div>
            <label>
              Full name <span className="danger">*</span>
            </label>
            <Input
              name="fullName"
              value={formiks.values.fullName}
              onChange={formiks.handleChange}
              className={
                formiks.touched.fullName && formiks.errors.fullName
                  ? "border-red"
                  : ""
              }
            />
            {formiks.touched.fullName && formiks.errors.fullName && (
              <span className="danger">{formiks.errors.fullName}</span>
            )}
          </div>

          <div className="form-top">
            <div className="w50">
              <div>
                <label>
                  Object <span className="danger">*</span>
                </label>
              </div>
              <Select
                className="w-full"
                value={
                  formiks.values.object === null
                    ? DEFAULT_OPTION
                    : formiks.values.object
                }
                defaultValue={DEFAULT_OPTION}
                onChange={handleChangeObject}
              >
                {renderListObject()}
              </Select>
            </div>

            <div className="form-top-right">
              <div className="w50">
                <div>
                  <label>Date of birth</label>
                </div>

                <DatePicker
                  className="w-full"
                  format="DD/MM/YYYY"
                  value={dayjs(formiks.values.dateOfBirth)}
                  onChange={handleChangeDob}
                  clearIcon={null}
                />
              </div>

              <div className="w50">
                <div>
                  <label>Gender</label>
                </div>
                <Select
                  className="w-full"
                  value={formiks.values.gender}
                  onChange={handleChangeGender}
                >
                  {GENDER.map((gender) => (
                    <Option key={gender} value={gender}>
                      {gender}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>

          <Typography>Travel:</Typography>
          {formiks.values.travels.length === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "1rem" }}>
                Do you travel in the last 14 days ?
              </div>
              <Button type="primary" onClick={handleAddMoreTravel}>
                Add more
              </Button>
            </div>
          ) : (
            formiks.values.travels.map((travel, index) => {
              return (
                <SubForm
                  key={index}
                  index={index}
                  handleAddMoreTravel={handleAddMoreTravel}
                  handleDeleteTravel={() => handleDeleteTravel(index)}
                  formiks={formiks}
                />
              );
            })
          )}

          <Button htmlType="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default App;
