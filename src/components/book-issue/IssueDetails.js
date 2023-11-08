import React from 'react'
import { Button, Spacer, Input } from '@nextui-org/react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function IssueDetails() {
  return (
    <Container>

      {/* search bar */}
      <Spacer y={4} />
      <Input
      isClearable
      radius="lg"
      classNames={{
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
        size="md"
        bordered
        clearable
        placeholder="Search..."
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Spacer />


      {/* table */}
      <Table striped borderless hover responsive variant='dark' className="infinite-scroll-container custom-table">
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Name</th>
            <th>Books</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Borrowed date</th>
            <th>Returned date</th>
          </tr>
        </thead>
        <tbody>
          {/* {visibleBooks.map((book, index) => ( */}
            <tr>
              <td>1</td>
              <td>Harshani</td>
              <td>12.12.12.</td>
              <td>750</td>
              <td>1</td>
              <td>11/8/2023</td>
              <td>-</td>
            </tr>
          {/* ))} */}
        </tbody>
      </Table>
      {/* {loading && (
        <div
          className={showLoading ? 'loading' : ''}
          style={{ opacity: showLoading ? 1 : 0 }}
        >
          Loading...
        </div>
      )} */}
    </Container>
  )
}

export default IssueDetails