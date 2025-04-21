'use client';

import Form from '../form';
import styles from '@/assets/styles/page.module.scss';
import { PersonDataSourceModel, PersonModel } from '@/models/person.model';
import { Space, Table, TableColumnsType } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useT } from '@/app/i18n/client';
import { FormTableGenderEnum } from '@/enums/form-table.enum';
import { cloneDeep } from 'lodash';

/**
 * ANCHOR Index
 * @date 21/04/2025 - 07:08:32
 *
 * @returns {*}
 */
const Index = () => {
  const { t } = useT('form-table');

  const [, setPeople] = useState<PersonModel[]>([]);
  const [dataSource, setDataSource] = useState<PersonDataSourceModel[]>([]);

  /**
   * ANCHOR Delete
   * @date 21/04/2025 - 08:43:14
   *
   * @param {PersonDataSourceModel} data
   */
  const _delete = (data: PersonDataSourceModel) => {
    const items: PersonDataSourceModel[] = cloneDeep(dataSource);
    const index: number = items.findIndex((e) => e.key == data.key);

    if (index > -1) {
      items.splice(index, 1);

      setDataSource(items);

      alert(t('Delete Success'));
    }
  };

  useEffect(() => {
    // people
    const people: PersonModel[] = [
      {
        key: '1ef0c3b0-1e44-11f0-a4a7-75c43d5bb3df',
        title: 'MRS',
        firstName: 'Thanakorn',
        lastName: 'Nitsiri',
        birthday: '04/02/25',
        nationality: 'French',
        citizenId: '1909700081249',
        gender: FormTableGenderEnum.Male,
        countryCode: '+66',
        mobilePhone: '0884448554',
        passportNo: null,
        expectedSalary: 60000,
      },
      {
        key: '1ef0c3b0-1e44-11f0-a4a7-75c43d5bb3d0',
        title: 'MRS',
        firstName: 'ธนากร',
        lastName: 'นิตย์ศิริ',
        birthday: '04/02/25',
        nationality: 'French',
        citizenId: '1909700081249',
        gender: FormTableGenderEnum.Female,
        countryCode: '+66',
        mobilePhone: '0884448554',
        passportNo: null,
        expectedSalary: 60000,
      },
    ];

    setPeople(people);

    // data source
    const dataSource: PersonDataSourceModel[] = [];

    for (const person of people) {
      // data
      const data: PersonDataSourceModel = {
        key: person.key,
        name: `${person.firstName} ${person.lastName}`,
        gender: t(person.gender),
        phoneNumber: `${person.countryCode}${person.mobilePhone}`,
        nationality: t(person.nationality),
      };

      dataSource.push(data);
    }

    setDataSource(dataSource);
  }, []);

  // columns
  const columns: TableColumnsType<PersonDataSourceModel> = [
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: t('Gender'),
      dataIndex: 'gender',
      key: 'gender',
      sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
      title: t('Mobile Phone'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
    },
    {
      title: t('Nationality'),
      dataIndex: 'nationality',
      key: 'nationality',
      sorter: (a, b) => a.nationality.length - b.nationality.length,
    },
    {
      title: t('Manage'),
      render: (_, data) => (
        <Space size="middle">
          <a>{t('Edit')}</a>
          <a onClick={() => _delete(data)}>{t('Delete')}</a>
        </Space>
      ),
    },
  ];

  // ANCHOR Render
  return (
    <Content className={styles.content}>
      <Form />
      <Table<PersonDataSourceModel>
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: 10,
          position: ['topRight'],
          itemRender: (_, type, originalElement) => {
            if (type === 'prev') {
              return (
                <a
                  style={{
                    marginRight: 8,
                  }}>
                  {t('Previous')}
                </a>
              );
            }
            if (type === 'next') {
              return (
                <a
                  style={{
                    marginLeft: 8,
                  }}>
                  {t('Next')}
                </a>
              );
            }
            return originalElement;
          },
        }}
      />
    </Content>
  );
};

export default Index;
