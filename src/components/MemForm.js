import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Input } from "@nextui-org/react";

function MemForm() {
    const [value, setValue] = React.useState("junior2nextui.org");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);
    return (
        <div className="border flex w-full flex-wrap md:flex-nowrap gap-1">
            <Input isReadOnly variant='bordered' type="ID" label="Member ID" defaultValue='1' />
            <Input variant='bordered' type="name" label="Name" placeholder="Enter your name" />
            <Input variant='bordered' isInvalid={isInvalid} type="email" label="Email" placeholder="Enter your email" 
                errorMessage={isInvalid && "Please enter a valid email"}
                onValueChange={setValue}
            />
            <Input variant='bordered' type="phone" label="Contact Number" placeholder="Enter your phone number" />

        </div>
    )
}

export default MemForm