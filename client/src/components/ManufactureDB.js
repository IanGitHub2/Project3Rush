import React from 'react'
import axios from 'axios'
import { response } from 'express'

export default class ManufactureDB extends React.Component {
    state = {
        manufacture = {
            Audi: {
                carId = {}
            },
            Ford = {
                carId = {}
            },
        }
    }

    getModelFromDB(){
        axios.get(event)
        let manufacture = ({...this.state.manufacture})
        manufacture.audi = responseaudi
        this.setState({manufacture})
    }
}
// axios.get(banna
// var manufacture = (...this.state.manufacture)
// manufacture.audi = resaudi
//this.setstate({manufacture})
//)
