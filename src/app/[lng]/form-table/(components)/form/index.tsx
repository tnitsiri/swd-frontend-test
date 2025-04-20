'use client';

import MaskedInput from 'antd-mask-input';
import dayjs from 'dayjs';
import styles from './styles.module.scss';
import {
  Form,
  Select,
  Button,
  Input,
  DatePicker,
  Radio,
  InputNumber,
} from 'antd';
import {
  FormTableGenderEnum,
  FormTableNationalityEnum,
  FormTableTitleEnum,
} from '@/enums/form-table.enum';
import { setForm } from '@/stores/slices/form.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hook';
import { useT } from '@/app/i18n/client';
import { SyntheticEvent } from 'react';

/**
 * ANCHOR Inputs
 * @date 20/04/2025 - 19:57:11
 *
 * @typedef {Inputs}
 */
type Inputs = {
  title: FormTableTitleEnum;
  firstName: string;
  lastName: string;
  birthday: string;
  nationality: FormTableNationalityEnum;
  citizenId: string;
  gender: FormTableGenderEnum;
  countryCode: string;
  mobilePhone: string;
  passportNo: string;
  expectedSalary: number;
};

/**
 * ANCHOR Index
 * @date 20/04/2025 - 18:44:09
 *
 * @returns {*}
 */
const Index = () => {
  const { t } = useT('form-table');
  const {
    title,
    firstName,
    lastName,
    birthday,
    nationality,
    citizenId,
    gender,
    countryCode,
    mobilePhone,
    passportNo,
    expectedSalary,
  } = useAppSelector((state) => state.form);

  const dispatch = useAppDispatch();

  /**
   * ANCHOR Save
   * @date 20/04/2025 - 18:37:31
   *
   * @param {FormEvent} e
   */
  const _save = () => {
    console.log(title);
  };

  /**
   * ANCHOR Reset
   * @date 20/04/2025 - 20:05:08
   */
  const _reset = () => {
    dispatch(
      setForm({
        title: null,
        firstName: '',
        lastName: '',
        birthday: null,
        nationality: null,
        citizenId: '',
        gender: null,
        countryCode: '',
        mobilePhone: '',
        passportNo: '',
        expectedSalary: null,
      }),
    );
  };
  // ANCHOR Render
  return (
    <div className={styles.form}>
      <Form<Inputs>
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{
          title,
          firstName,
          lastName,
          birthday: birthday ? dayjs(birthday) : null,
          nationality,
          citizenId,
          gender,
          countryCode,
          mobilePhone,
          passportNo,
          expectedSalary,
        }}
        onFinish={_save}>
        <Form.Item<Inputs>
          label={t('Title')}
          name="title"
          rules={[
            {
              required: true,
              message: t('Please specify the title'),
            },
          ]}>
          <Select
            value={title}
            placeholder={t('Title')}
            onChange={(v) => {
              dispatch(
                setForm({
                  title: v,
                }),
              );
            }}>
            {Object.values(FormTableTitleEnum).map((title) => {
              return (
                <Select.Option key={title} value={title}>
                  {t(title)}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Firstname')}
          name="firstName"
          rules={[
            {
              required: true,
              whitespace: true,
              message: t('Please specify firstname'),
            },
          ]}>
          <Input
            value={firstName}
            maxLength={50}
            onInput={(e) => {
              dispatch(
                setForm({
                  firstName: e.currentTarget.value,
                }),
              );
            }}
          />
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Lastname')}
          name="lastName"
          rules={[
            {
              required: true,
              whitespace: true,
              message: t('Please specify lastname'),
            },
          ]}>
          <Input
            value={lastName}
            maxLength={50}
            onInput={(e) => {
              dispatch(
                setForm({
                  lastName: e.currentTarget.value,
                }),
              );
            }}
          />
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Birthday')}
          name="birthday"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}>
          <DatePicker
            value={birthday}
            placeholder={t('BirthdayPattern')}
            format="MM/DD/YY"
            maxDate={dayjs()}
            onChange={(_, dateString) => {
              dispatch(
                setForm({
                  birthday: dateString as string,
                }),
              );
            }}
          />
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Nationality')}
          name="nationality"
          rules={[
            {
              required: true,
              message: t('Please specify the nationality'),
            },
          ]}>
          <Select
            value={nationality}
            placeholder={t('Please select')}
            onChange={(value) => {
              dispatch(
                setForm({
                  nationality: value,
                }),
              );
            }}>
            {Object.values(FormTableNationalityEnum).map((nationality) => {
              return (
                <Select.Option key={nationality} value={nationality}>
                  {t(nationality)}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item<Inputs>
          label={t('CitizenID')}
          name="citizenId"
          rules={[
            {
              required: true,
              message: t('Please specify citizen id'),
              validator: (_, value) => {
                const text: string = value.replace(/\D/g, '');

                if (text.length == 13) {
                  return Promise.resolve();
                }

                return Promise.reject(t('Please specify citizen id'));
              },
            },
          ]}>
          <MaskedInput
            value={citizenId}
            mask={'0 - 0000 - 00000 - 00 - 0'}
            onChange={(
              e: SyntheticEvent & {
                maskedValue: string;
                unmaskedValue: string;
              },
            ) => {
              dispatch(
                setForm({
                  citizenId: e.unmaskedValue,
                }),
              );
            }}
          />
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Gender')}
          name="gender"
          rules={[
            {
              required: true,
              message: t('Please specify gender'),
            },
          ]}>
          <Radio.Group value={gender}>
            {Object.values(FormTableGenderEnum).map((gender) => {
              return (
                <Radio key={gender} value={gender}>
                  {t(gender)}
                </Radio>
              );
            })}
          </Radio.Group>
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Mobile Phone')}
          name="mobilePhone"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[0-9]*$/),
              message: t('Please specify mobile phone'),
            },
            {
              min: 10,
              message: t('Mobile phone length is incorrect'),
            },
          ]}>
          <Input
            value={mobilePhone}
            maxLength={10}
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
            }}
            addonBefore={
              <Form.Item<Inputs>
                name="countryCode"
                noStyle={true}
                rules={[
                  {
                    required: true,
                    message: t('Please specify country code'),
                  },
                ]}>
                <Select
                  value={countryCode}
                  style={{
                    width: 70,
                  }}
                  onChange={(v) => {
                    dispatch(
                      setForm({
                        countryCode: v,
                      }),
                    );
                  }}>
                  <Select.Option value="+66">+66</Select.Option>
                  <Select.Option value="+33">+33</Select.Option>
                  <Select.Option value="+1">+1</Select.Option>
                </Select>
              </Form.Item>
            }
            onInput={(e) => {
              dispatch(
                setForm({
                  mobilePhone: e.currentTarget.value,
                }),
              );
            }}
          />
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Passport No')}
          name="passportNo"
          rules={[
            {
              pattern: new RegExp(/^[0-9]*$/),
              message: t('Passport number is invalid'),
            },
            {
              min: 8,
              message: t('Passport number length is incorrect'),
            },
          ]}>
          <Input
            value={passportNo}
            maxLength={9}
            onInput={(e) => {
              dispatch(
                setForm({
                  passportNo: e.currentTarget.value,
                }),
              );
            }}
          />
        </Form.Item>
        <Form.Item<Inputs>
          label={t('Expected Salary')}
          name="expectedSalary"
          rules={[
            {
              required: true,
              message: t('Please specify expected salary'),
            },
          ]}>
          <InputNumber
            value={expectedSalary}
            maxLength={8}
            onChange={(v) => {
              dispatch(
                setForm({
                  expectedSalary: v,
                }),
              );
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            htmlType="reset"
            style={{
              textTransform: 'uppercase',
            }}
            onClick={_reset}>
            {t('Reset')}
          </Button>
          <Button
            type="default"
            htmlType="submit"
            style={{
              textTransform: 'uppercase',
            }}>
            {t('Submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
