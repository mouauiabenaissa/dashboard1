import React from "react"
import { Form, Input, Table, FormGroup, Label, FormText, FormFeedback } from "reactstrap"
import { Row, Column } from "simple-flexbox"
import CardComponent from '../../../../Components/Cards/CardComponent/CardComponent'

function FindMedicineByName(props) {
    const [OptionSelected, setOptionSelected] = React.useState('')
    const description = "symptomatic treatment of mild to moderate pain and/or febrile states.Symptomatictreatment of pain in osteorthritis."

    return (
        <>
            <Row horizontal="center">
                <Column horizontal="center">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Enter a medicine name
                            </Label>
                            <Input />
                        </FormGroup>
                    </Form>
                </Column>
            </Row>
            {OptionSelected && OptionSelected !== 'None' ?
                <CardComponent
                    containerStyles={props.containerStyles}
                    title={OptionSelected}
                    subtitle={description}
                    link={`learn more about ${OptionSelected}`}
                    items={[
                        <>
                            <Row vertical="center">
                                <Column flexGrow={0.5} vertical="center" style={{ marginBottom: "50px" }}>
                                    <h6 style={{ textDecoration: "underline", color: "#114575" }}>Informations</h6>
                                    <Table striped style={{ textAlign: "center" }}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Mark
                                                </td>
                                                <td>
                                                    Otto
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Jacob
                                                </td>
                                                <td>
                                                    Thornton
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Larry
                                                </td>
                                                <td>
                                                    the Bird
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Column>
                            </Row>
                            <Row>
                                <Column flexGrow={0.5}>
                                    <h6 style={{ textDecoration: "underline", color: "#114575" }}>Available Pharmacies</h6>
                                    <Table striped>
                                        <thead>
                                            <tr>
                                                <th>
                                                    name
                                                </th>
                                                <th>
                                                    quantity
                                                </th>
                                                <th>
                                                    night pharmacy?
                                                </th>
                                                <th>
                                                    has cnam?
                                                </th>
                                                <th>
                                                    distance
                                                </th>
                                                <th>
                                                    phone
                                                </th>
                                                <th>
                                                    location
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    1
                                                </th>
                                                <td>
                                                    Mark
                                                </td>
                                                <td>
                                                    Otto
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    2
                                                </th>
                                                <td>
                                                    Jacob
                                                </td>
                                                <td>
                                                    Thornton
                                                </td>
                                                <td>
                                                    @fat
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    3
                                                </th>
                                                <td>
                                                    Larry
                                                </td>
                                                <td>
                                                    the Bird
                                                </td>
                                                <td>
                                                    @twitter
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                                <td>
                                                    @mdo
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Column>
                            </Row>
                        </>

                    ]}
                />
                :
                null}
        </>


    )
}

export default FindMedicineByName