import React, { useState, useEffect } from 'react'

export default function WaitProgress() {
    // Getter and setter for user state
    const [progress, setProgress] = useState({ forward: true, value: 0 })

    useEffect(() => {
        let interval = setInterval(
            () => {
                if(progress.forward) {
                    if(progress.value === 100) {
                        setProgress(p => { return { forward: false, value: 100 }})
                    } else {
                        setProgress(p => { return { forward: true, value: p.value + 1 }})
                    }
                } else {
                    if(progress.value === 0) {
                        setProgress(p => { return { forward: true, value: 0 }})
                    } else {
                        setProgress(p => { return { forward: false, value: p.value - 1 }})
                    }
                }
            },
            150
        )     

        // return cleaanup
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className="progress">
            <div className={`bar striped secondary w-${progress.value}`}></div>
        </div>
    )
}