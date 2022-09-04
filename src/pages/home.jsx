import React, { useState } from "react";
import Input from "../controls/input";
import Select from "../controls/select";
import Tables from "../components/table";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import toast from 'react-hot-toast';

function Home() {
  //// inital state
  const initState = {
    firstName: "",
    date: "",
    school: "",
    idCard: "",
  };
  ////scools
  const scoolValues = [
    { schoolId: "scooll1", scoolName: "scooll1" },
    { schoolId: "scooll2", scoolName: "scooll2" },
    { schoolId: "scooll3", scoolName: "scooll3" },
    { schoolId: "scooll4", scoolName: "scooll4" },
  ];

  const [values, setValues] = useState(initState);
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState({});

  /// validation
  const validateForm = () => {
    let temp = {};
    temp.firstName =
      values.firstName.length > 4 && values.firstName.length < 10
        ? ""
        : "first name shoud be more than 4 letters and less than 10 letters ";
    temp.date =
      values.date > "1980-1-1" && values.date < "2000-1-1"
        ? ""
        : "Date should be btween 1980-1-1 and 2000-1-1";
    temp.school = values.school != "" ? "" : "pleasz choose scool";
    temp.idCard = values.idCard.length == 4 ? "" : "id chould be 4 letters";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  //// onch
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // const notify = () => toast();

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      if(values.id){
      console.log(values.id);
        setTableData(prev => prev.map(item => (item.id === values.id ? values : item)));
        setValues(initState);
        toast.success('Card Added Successfully');

      }else{
      values.id = Math.floor(Math.random() * 10000);
      setTableData([...tableData, values]);
      setValues(initState);
      toast.success('Card Added Successfully');

      }

      console.log(values.id);
    }
  }
  return (
    <div className="App">
     
      <form className="form-container">
        <Grid container spacing={3} className="grid-container">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Input
              name="firstName"
              label="First Name"
              value={values?.firstName}
              error={errors.firstName}
              onChange={handleChange}
              type="text"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Select
              name="school"
              label="school"
              value={values?.school}
              options={scoolValues}
              error={errors.school}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Input
              name="date"
              label="Date"
              value={values?.date}
              error={errors.date}
              onChange={handleChange}
              type="date"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Input
              name="idCard"
              label="ID"
              value={values?.idCard}
              error={errors.idCard}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item md={12} lg={12}>
            <Button
              variant="contained"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              {" "}
              Add{" "}
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="grid-container">
        <Tables
          tableData={tableData}
          setTableData={setTableData}
          setValues={setValues}
        />
      </div>
    </div>
  );
}

export default Home;
