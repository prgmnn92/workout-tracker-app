import React from "react";

import { InputNumber, Button, Row, Col } from "antd";

import "./set-input.styles.scss";

const SetInput = () => {
  return (
    <Row gutter={[24, 16]} type="flex" justify="start" className="set-input">
      <Col span={8}>
        <InputNumber min={1} max={100000} defaultValue={3} />
      </Col>
      <Col span={8}>
        <InputNumber min={1} max={100000} defaultValue={30} step={2.5} />
      </Col>
      <Col span={8}>
        <Button type="danger">+</Button>
      </Col>
    </Row>
  );
};

export default SetInput;
