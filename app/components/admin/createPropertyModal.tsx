import React from 'react';
import { Modal, Form, Input, Button, Select, Switch, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Location, PropertyStatus, PropertyType } from '@/constants/Enums';


interface AddPropertyModalProps {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
  }

  const { TextArea } = Input;
const { Option } = Select;

const CreatePropertyModal: React.FC<AddPropertyModalProps> = ({isModalOpen, handleOk, handleCancel}) => {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    handleOk(); // Close the modal when the form is submitted
  };

  return (
    <>
      <Modal
      title="Add Property"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null} // Remove default footer buttons
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
      >
        {/* Property Title */}
        <Form.Item
          label="Property Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the property title' }]}
        >
          <Input placeholder="Enter property title" />
        </Form.Item>

        {/* Property Description */}
        <Form.Item
          label="Property Description"
          name="description"
          rules={[{ required: true, message: 'Please enter the property description' }]}
        >
          <TextArea rows={4} placeholder="Enter property description" />
        </Form.Item>

        {/* Property Price and Area on the same line */}
        <div className="flex gap-4">
        <Form.Item
            label="Property Price (LKR)"
            name="price"
            rules={[{ required: true, message: 'Please enter the property price' }]}
            className="flex-1"
        >
            <InputNumber
            prefix="LKR"
            className="!w-full"
            placeholder="Enter price"
            min={0}
            />
        </Form.Item>

        <Form.Item
            label="Property Area (sq ft)"
            name="area"
            rules={[{ required: true, message: 'Please enter the property area in sq ft' }]}
            className="flex-1"
        >
            <InputNumber
            className="!w-full"
            placeholder="Enter area in sq ft"
            min={0}
            />
        </Form.Item>
        </div>

        {/* Property Type and Status on the same line */}
        <div className="flex gap-4">
        <Form.Item
            label="Property Type"
            name="type"
            rules={[{ required: true, message: 'Please select a property type' }]}
            className="flex-1"
        >
            <Select placeholder="Select property type">
            <Option value={PropertyType.SINGLE_FAMILY}>Single Family</Option>
            <Option value={PropertyType.VILLA}>Villa</Option>
            </Select>
        </Form.Item>

        <Form.Item
            label="Property Status"
            name="status"
            rules={[{ required: true, message: 'Please select a property status' }]}
            className="flex-1"
        >
            <Select placeholder="Select property status">
            <Option value={PropertyStatus.FOR_SALE}>For Sale</Option>
            <Option value={PropertyStatus.FOR_RENT}>For Rent</Option>
            </Select>
        </Form.Item>
        </div>

        <div className="flex gap-4">
        <Form.Item
            label="Property Location"
            name="location"
            rules={[{ required: true, message: 'Please select a location' }]}
            className="flex-1"
        >
            <Select placeholder="Select location">
            <Option value={Location.COLOMBO}>Colombo</Option>
            <Option value={Location.KANDY}>Kandy</Option>
            <Option value={Location.GALLE}>Galle</Option>
            </Select>
        </Form.Item>
        <Form.Item
            label="Single Lock-Up Garage"
            name="slug"
            valuePropName="checked"
            rules={[{ required: true }]}
            className="flex-1"
        >
            <Switch checkedChildren="Yes" unCheckedChildren="No" />
        </Form.Item>
        </div>

        {/* Property Image */}
        <Form.Item
          label="Property Image"
          name="propertyImg"
          valuePropName="file"
          rules={[{ required: true, message: 'Please upload an image' }]}
        >
          <Upload name="image" listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Add Property
          </Button>
        </Form.Item>
      </Form>
    </Modal>
    </>
  );
};

export default CreatePropertyModal;