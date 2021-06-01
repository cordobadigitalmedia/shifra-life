import React, { useState, useRef, useEffect } from 'react'
import { PrayerChecker } from "../store/PrayerChecker";

export function PrayerApplyTable({ prayerChecks }) {
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
                    <td><PrayerChecker selectedDate="20210901" currentChapter="apply-verses" /></td>
                    <td><PrayerChecker selectedDate="20210902" currentChapter="apply-verses" /></td>
                    <td><PrayerChecker selectedDate="20210903" currentChapter="apply-verses" /></td>
                    <td><PrayerChecker selectedDate="20210904" currentChapter="apply-verses" /></td>
                    <td><PrayerChecker selectedDate="20210905" currentChapter="apply-verses" /></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}
