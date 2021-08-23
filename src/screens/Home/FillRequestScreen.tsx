import { Formik } from 'formik';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Keyboard, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import * as Yup from 'yup'
import { saveRequestData } from '../../redux/actions/RequestAction'
import colors from '../../assets/colors'
import CardTextInput from '../../components/CardTextInput';
import CustomButton from '../../components/CustomButton';
import Header, { HeaderIcons } from '../../components/Header'
import InputDate from '../../components/InputDate';
import PickerInput from '../../components/PickerInput';
import { verticalScale } from '../../utils/Scaling';

interface FillRequestScreenProps {
    navigation: any
    saveRequestData: any
}
interface FillRequestScreenState {
    selectedDepartmentVal: number
    departmentsData: {
        id: number,
        type: string
    }[]
}
class FillRequestScreen extends Component<FillRequestScreenProps, FillRequestScreenState> {
    inputsFailed: any = {}
    constructor(props: FillRequestScreenProps) {
        super(props)
        this.state = {
            selectedDepartmentVal: -1,
            departmentsData: [
                {
                    id: 1,
                    type: 'Department 1'
                },
                {
                    id: 2,
                    type: 'Department 2'
                },
                {
                    id: 3,
                    type: 'Department 3'
                }]
        }
    }
    renderFormInputs() {
        const initialData = {
            name: '',
            mobile: '',
            startDate: '',
            numberOfDays: '',
            department: ''
        };
        const ValidationSchema = Yup.object().shape({
            startDate: Yup.string().required('required'),
            name: Yup.string().required('required'),
            department: Yup.string().required('required'),
            numberOfDays: Yup.string().required('required'),
            mobile: Yup.string()
                .min(11, 'phone number must be 11 numbers')
                .max(11, 'phone number must be 11 numbers')
                .optional(),

        });
        let { selectedDepartmentVal, departmentsData } = this.state
        return (
            <Formik initialValues={initialData} validationSchema={ValidationSchema}
                onSubmit={this.onSubmit}>
                {
                    (formikProps) => (
                        <View style={{ marginVertical: verticalScale(5), flex: 1 }}>
                            <ScrollView
                                contentContainerStyle={{ paddingBottom: verticalScale(150), marginTop: verticalScale(20) }}>
                                <CardTextInput
                                    value={formikProps.values.name}
                                    onChangeText={formikProps.handleChange('name')}
                                    placeHolder={'Name'}
                                    keyboardType='default'
                                    inputRef={(input: any) => { this.inputsFailed.name = input; }}
                                    error={formikProps.errors.name}
                                    touched={formikProps.touched.name}
                                    onBlur={() => formikProps.setFieldTouched('name')}
                                    onSubmitEditing={() => { Keyboard.dismiss() }} />
                                <PickerInput
                                    pickerData={departmentsData}
                                    withBorders
                                    selectedValue={selectedDepartmentVal}
                                    error={formikProps.errors.department}
                                    touched={formikProps.touched.department}
                                    placeHolder={'Choose department'}
                                    onValueChange={(data, index) => {
                                        formikProps.setFieldValue('department', data.type)
                                        this.setState({ selectedDepartmentVal: index })
                                    }} />
                                <CardTextInput
                                    value={formikProps.values.mobile}
                                    onChangeText={formikProps.handleChange('mobile')}
                                    placeHolder={'Mobile number'}
                                    keyboardType='numeric'
                                    maxLength={11}
                                    inputRef={(input: any) => { this.inputsFailed.mobile = input; }}
                                    error={formikProps.errors.mobile}
                                    touched={formikProps.touched.mobile}
                                    onSubmitEditing={() => { Keyboard.dismiss() }} />
                                <InputDate
                                    value={formikProps.values.startDate}
                                    error={formikProps.errors.startDate}
                                    touched={formikProps.touched.startDate}
                                    min={new Date()}
                                    placeholder={'Start date'}
                                    onChangeText={(value: any) => {
                                        formikProps.setFieldValue('startDate', new Date(value))
                                    }} />
                                <CardTextInput
                                    value={formikProps.values.numberOfDays}
                                    onChangeText={formikProps.handleChange('numberOfDays')}
                                    placeHolder={'Number of requested days'}
                                    keyboardType='numeric'
                                    maxLength={3}
                                    inputRef={(input: any) => { this.inputsFailed.numberOfDays = input; }}
                                    error={formikProps.errors.numberOfDays}
                                    touched={formikProps.touched.numberOfDays}
                                    onBlur={() => formikProps.setFieldTouched('numberOfDays')}
                                    onSubmitEditing={() => { Keyboard.dismiss() }} />

                            </ScrollView>
                            <CustomButton buttonTitle={'Save'} onPress={() => formikProps.handleSubmit()} />

                        </View>
                    )
                }
            </Formik>
        )
    }


    onSubmit = async (values: any, { setStatus, resetForm }: any) => {
        this.props.saveRequestData(values)
        this.setState({ selectedDepartmentVal: -1 })
        resetForm({})
        setStatus({ success: true })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header headerTitle='Vacation Reuest' type={HeaderIcons.PEN} />
                {this.renderFormInputs()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR
    }
})

const mapDispatchToProps = {
    saveRequestData
}

export default connect(null, mapDispatchToProps)(FillRequestScreen)