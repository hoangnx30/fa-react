import { Button, Select } from "antd";
import Input from "antd/lib/input/Input";
import dayjs, { Dayjs } from "dayjs";
import { ISubForm } from "../../App";
import DatePicker from "../DatePicker";

const { Option } = Select;

interface Props {
  handleAddMoreTravel: () => void;
  handleDeleteTravel: () => void;
  index: number;
  formiks: any;
}

export function SubForm(props: Props) {
  const { handleAddMoreTravel, index, handleDeleteTravel, formiks } = props;
  console.log(formiks);
  const handleChangeDepartureDate = (value: Dayjs | null) => {
    const travels = formiks.values.travels.map(
      (travel: ISubForm, idx: number) => {
        if (idx === index) {
          return {
            ...travel,
            departureDate: value,
          };
        }
        return travel;
      }
    );

    formiks.setFieldValue("travels", travels);
  };

  const newIdx = index + 1;
  return (
    <>
      <div>
        <div>Travel {newIdx}</div>

        <div>
          <div>
            <label>Departure Date</label>
          </div>
          <DatePicker
            className="w-full"
            format="DD/MM/YYYY"
            value={dayjs(formiks.values.travels[index].departureDate)}
            onChange={handleChangeDepartureDate}
            clearIcon={null}
          />
          {formiks.errors.departureDate && formiks.touched.departureDate && (
            <span className="danger">{formiks.errors.departureDate}</span>
          )}
        </div>

        <div>
          <label>
            Test <span className="danger">*</span>
          </label>
          <Input
            name="test"
            value={formiks.values.test}
            onChange={formiks.handleChange}
            className={
              formiks.touched.travels && formiks.errors.test ? "border-red" : ""
            }
          />
          {formiks.touched.test && formiks.errors.test && (
            <span className="danger">{formiks.errors.test}</span>
          )}
        </div>
      </div>

      <div>
        <Button type="primary" onClick={handleAddMoreTravel}>
          Add more
        </Button>
        <Button onClick={handleDeleteTravel}>Delete</Button>
      </div>
    </>
  );
}
