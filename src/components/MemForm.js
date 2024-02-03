import React from 'react'
import { Input, Listbox, ListboxItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { FormLabel } from 'react-bootstrap';

function MemForm() {
    const [value, setValue] = React.useState("junior2nextui.org");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);
    return (
        <div className="form flex w-full flex-wrap md:flex-nowrap gap-1">
            <FormLabel>Library Checkout Details</FormLabel>
            <Input size='sm' isReadOnly variant='bordered' type="ID" label="Member ID" defaultValue='1' />
            <Input size='sm' variant='bordered' type="name" label="Name" placeholder="Enter your name" />
            <Input size='sm' variant='bordered' type="email" label="Email" placeholder="Enter your email"
                onValueChange={setValue}
            />
            <Input size='sm' variant='bordered' type="phone" label="Contact Number" placeholder="Enter your phone number" />
            {/* ordered books */}
            <Popover>
                <PopoverTrigger>

                <Button size="sm">See ordered book details</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Listbox>
                        <ListboxItem>book1</ListboxItem>
                        <ListboxItem>book1</ListboxItem>
                        <ListboxItem>book1</ListboxItem>
                        <ListboxItem>book1</ListboxItem>
                    </Listbox>
                </PopoverContent>
            </Popover>
            {/* Submit button */}
            <Button className="formSub" size='sm'>Submit</Button>
        </div>
    )
}

export default MemForm