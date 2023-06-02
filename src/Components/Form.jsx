import React, { Component } from 'react'
import InputField from './InputField'
import TableField from './TableField'


export default class Form extends Component {
    render() {
        return (
            <div className='container'>
                <InputField></InputField>
                <TableField></TableField>
            </div>
        )
    }
}
