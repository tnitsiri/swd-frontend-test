'use client';

import Content from '@/components/content';
import Form from '../form';
import styles from './styles.module.scss';
import { PersonDataSourceModel, PersonModel } from '@/models/person.model';
import { Button, Checkbox, Space, Table, TableColumnsType } from 'antd';
import { Key, useEffect, useState } from 'react';
import { useT } from '@/app/i18n/client';
import { cloneDeep } from 'lodash';
import { PersonDataSourceMappingUtil } from '@/utils/person.util';
import { TableCurrentDataSource } from 'antd/es/table/interface';
import { setForm } from '@/stores/slices/form.slice';
import { useAppDispatch } from '@/stores/hook';
import { v1 as uuidv1 } from 'uuid';
import { PEOPLE_CONSTANT } from '@/constants/form.constant';

/**
 * ANCHOR Index
 * @date 21/04/2025 - 07:08:32
 *
 * @returns {*}
 */
const Index = () => {
  const { t } = useT('form-table');

  const [people, setPeople] = useState<PersonModel[]>([]);
  const [dataSource, setDataSource] = useState<PersonDataSourceModel[]>([]);

  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const [formKey, setFormKey] = useState<string>(uuidv1());
  const [updatingPerson, setUpdatingPerson] = useState<PersonModel | null>(
    null,
  );

  const dispatch = useAppDispatch();

  /**
   * ANCHOR Created
   * @date 21/04/2025 - 11:21:56
   *
   * @param {PersonModel} person
   */
  const _created = (person: PersonModel) => {
    // person
    const peopleItems: PersonModel[] = cloneDeep(people);

    peopleItems.push(person);

    setPeople(peopleItems);

    // data source
    const dataSourceItems: PersonDataSourceModel[] = cloneDeep(dataSource);

    const data: PersonDataSourceModel = PersonDataSourceMappingUtil(person, t);

    dataSourceItems.push(data);

    setDataSource(dataSourceItems);

    // store
    localStorage.setItem(PEOPLE_CONSTANT, JSON.stringify(peopleItems));
  };

  /**
   * ANCHOR Edit
   * @date 21/04/2025 - 10:24:04
   *
   * @param {PersonDataSourceModel} data
   */
  const _edit = (data: PersonDataSourceModel) => {
    const person: PersonModel | undefined = people.find((e) => {
      return e.key == data.key;
    });

    if (person) {
      dispatch(
        setForm({
          title: person.title,
          firstName: person.firstName,
          lastName: person.lastName,
          birthday: person.birthday,
          nationality: person.nationality,
          citizenId: person.citizenId || '',
          gender: person.gender,
          countryCode: person.countryCode,
          mobilePhone: person.mobilePhone,
          passportNo: person.passportNo || '',
          expectedSalary: person.expectedSalary,
        }),
      );

      setUpdatingPerson(person);
      setFormKey(uuidv1());
    }
  };

  /**
   * ANCHOR Updated
   * @date 21/04/2025 - 10:54:20
   *
   * @param {PersonModel} person
   */
  const _updated = (person: PersonModel) => {
    // person
    const personIndex: number = people.findIndex((e) => {
      return e.key == person.key;
    });

    if (personIndex > -1) {
      const items: PersonModel[] = cloneDeep(people);

      items[personIndex] = person;

      setPeople(items);

      // store
      localStorage.setItem(PEOPLE_CONSTANT, JSON.stringify(items));
    }

    // data source
    const dataSourceIndex: number = dataSource.findIndex((e) => {
      return e.key == person.key;
    });

    if (dataSourceIndex > -1) {
      const items: PersonDataSourceModel[] = cloneDeep(dataSource);
      const data: PersonDataSourceModel = PersonDataSourceMappingUtil(
        person,
        t,
      );

      items[dataSourceIndex] = data;

      setDataSource(items);
    }

    // clear
    setUpdatingPerson(null);
  };

  /**
   * ANCHOR Delete
   * @date 21/04/2025 - 08:43:14
   *
   * @param {PersonDataSourceModel} data
   */
  const _delete = (data: PersonDataSourceModel) => {
    // person
    const personIndex: number = people.findIndex((e) => e.key == data.key);

    if (personIndex > -1) {
      const items: PersonModel[] = cloneDeep(people);

      items.splice(personIndex, 1);

      setPeople(items);

      // store
      localStorage.setItem(PEOPLE_CONSTANT, JSON.stringify(items));
    }

    // data source
    const dataSourceIndex: number = dataSource.findIndex(
      (e) => e.key == data.key,
    );

    if (dataSourceIndex > -1) {
      const items: PersonDataSourceModel[] = cloneDeep(dataSource);

      items.splice(dataSourceIndex, 1);

      setDataSource(items);
    }

    setUpdatingPerson(null);

    alert(t('Delete Success'));
  };

  /**
   * ANCHOR Delete Multiple
   * @date 21/04/2025 - 10:08:10
   */
  const _deleteMultiple = () => {
    if (selectedRowKeys.length < 1) {
      return;
    }

    const peopleItems: PersonModel[] = cloneDeep(people);
    const dataSourceItems: PersonDataSourceModel[] = cloneDeep(dataSource);

    for (const selectedRowKey of selectedRowKeys) {
      // person
      const personIndex: number = people.findIndex(
        (e) => e.key == selectedRowKey,
      );

      if (personIndex > -1) {
        peopleItems.splice(personIndex, 1);
      }

      // data source
      const dataSourceIndex: number = dataSource.findIndex(
        (e) => e.key == selectedRowKey,
      );

      if (dataSourceIndex > -1) {
        dataSourceItems.splice(dataSourceIndex, 1);
      }
    }

    setPeople(peopleItems);
    setDataSource(dataSourceItems);
    setSelectedRowKeys([]);
    setUpdatingPerson(null);

    // store
    localStorage.setItem(PEOPLE_CONSTANT, JSON.stringify(peopleItems));
  };

  /**
   * ANCHOR On Select Change
   * @date 21/04/2025 - 09:21:16
   *
   * @param {Key[]} newSelectedRowKeys
   */
  const _onSelectChange = (newSelectedRowKeys: Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  /**
   * ANCHOR Init
   * @date 21/04/2025 - 11:26:45
   */
  const _init = () => {
    const data: string | null = localStorage.getItem(PEOPLE_CONSTANT);

    if (data) {
      const people: PersonModel[] = JSON.parse(data);
      const dataSource: PersonDataSourceModel[] = [];

      for (const person of people) {
        const data: PersonDataSourceModel = PersonDataSourceMappingUtil(
          person,
          t,
        );

        dataSource.push(data);
      }

      setPeople(people);
      setDataSource(dataSource);
    }
  };

  useEffect(() => {
    _init();
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
          <a onClick={() => _edit(data)}>{t('Edit')}</a>
          <a onClick={() => _delete(data)}>{t('Delete')}</a>
        </Space>
      ),
    },
  ];

  // ANCHOR Render
  return (
    <Content>
      <Form
        formKey={formKey}
        onCreated={_created}
        updatingPerson={updatingPerson}
        onUpdated={_updated}
      />
      <div className={styles.table}>
        <Table<PersonDataSourceModel>
          columns={columns}
          dataSource={dataSource}
          onChange={(
            _,
            __,
            ___,
            extra: TableCurrentDataSource<PersonDataSourceModel>,
          ) => {
            console.log(extra.currentDataSource);
          }}
          rowSelection={{
            selectedRowKeys,
            onChange: _onSelectChange,
          }}
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
        {dataSource.length > 0 && (
          <div className={styles.actions}>
            <Checkbox
              checked={isSelectedAll}
              style={{
                marginLeft: 8,
              }}
              onChange={(e) => {
                if (e.target.checked) {
                  setIsSelectedAll(true);

                  const keys: Key[] = dataSource.map((e) => {
                    return e.key;
                  });

                  setSelectedRowKeys(keys);
                } else {
                  setIsSelectedAll(false);
                  setSelectedRowKeys([]);
                }
              }}>
              {t('Select All')}
            </Checkbox>
            <Button
              type="default"
              style={{
                backgroundColor:
                  selectedRowKeys.length < 1 ? '#fff' : undefined,
                textTransform: 'uppercase',
              }}
              disabled={selectedRowKeys.length < 1}
              onClick={_deleteMultiple}>
              {t('Delete')}
            </Button>
          </div>
        )}
      </div>
    </Content>
  );
};

export default Index;
