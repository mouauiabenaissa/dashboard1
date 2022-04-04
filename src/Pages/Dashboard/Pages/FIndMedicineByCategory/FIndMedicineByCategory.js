import React from 'react'
import axios from 'axios'
import { FormGroup, Form, Label, Input } from 'reactstrap'
function FIndMedicineByCategory() {
    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await axios.get("http://localhost:5000/find_category")
            setdata(res)
        }
        fetchCategory()
    }, [])

    const updateMedicineList = () => {
        document.getElementById("MedicineList").value = data[document.getElementById("CategorySelect")].toString()
    }
    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">
                        Choose your Category
                    </Label>
                    <Input
                        id="CategorySelect"
                        name="select"
                        type="select"
                        onChange={() => updateMedicineList()}
                    >
                        {data.map(category => {
                            <option>
                                {category.name}
                            </option>
                        })}
                    </Input>
                </FormGroup>
            </Form>

            <p id="MedicineList">

            </p>
        </>

    )
}

export default FIndMedicineByCategory