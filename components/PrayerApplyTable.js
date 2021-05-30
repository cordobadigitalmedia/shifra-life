import React, { useState, useRef, useEffect } from 'react'
import CheckBox from "@/components/CheckBox"
import { connect } from "react-redux";
import { saveTracking } from "../store/data.store";

const PrayerApplyTable = ({ prayerChecks }) => {
    const [checked, setChecked] = React.useState(false);
    //grab session store values for this and connect to output

    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Fajr</th>
                    <th>Dhur</th>
                    <th>Asr</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td><CheckBox label="" /></td>
                    <td><CheckBox label="" /></td>
                    <td><CheckBox label="" /></td>
                    <td><CheckBox label="" /></td>
                    <td><CheckBox label="" /></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    dataProps: state.data,
});

const mapDispatchToProps = {
    saveTracking,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerApplyTable);
