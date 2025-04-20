'use client';

import Triangle from '../triangle';
import Square from '../square';
import Circle from '../circle';
import Ellipse from '../ellipse';
import Trapezoid from '../trapezoid';
import Rectangle from '../rectangle';
import Rhombus from '../rhombus';
import { LayoutStyleShapeTriangleEnum } from '@/enums/layout-style.enum';
import { useT } from '@/app/i18n/client';
import { Col, Flex, Row, Space } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import { LayoutStyleNodeInterface } from '@/interfaces/layout-style.interface';
import { cloneDeep, shuffle } from 'lodash';

/**
 * ANCHOR Display
 * @date 20/04/2025 - 12:57:05
 *
 * @returns {*}
 */
const Display = () => {
  const { t } = useT('layout-style');

  const [nodes, setNodes] = useState<LayoutStyleNodeInterface[]>([]);
  const [isInverted, setIsInverted] = useState<boolean>(false);

  /**
   * ANCHOR Move Shape Left
   * @date 20/04/2025 - 13:08:42
   */
  const _moveShapeLeft = () => {
    const node: LayoutStyleNodeInterface = nodes[0];

    nodes.splice(0, 1);

    setNodes([...nodes, node]);
  };

  /**
   * ANCHOR Move Shape Right
   * @date 20/04/2025 - 13:09:06
   */
  const _moveShapeRight = () => {
    const index: number = nodes.length - 1;
    const node: LayoutStyleNodeInterface = nodes[index];

    nodes.splice(index, 1);

    setNodes([node, ...nodes]);
  };

  /**
   * ANCHOR Move Position
   * @date 20/04/2025 - 13:09:30
   */
  const _movePosition = () => {
    setIsInverted((isInverted) => !isInverted);
  };

  /**
   * ANCHOR Shuffle
   * @date 20/04/2025 - 13:36:39
   */
  const _shuffle = () => {
    const items: LayoutStyleNodeInterface[] = cloneDeep(nodes);
    const list: LayoutStyleNodeInterface[] = shuffle(items);

    setNodes(list);
  };

  /**
   * ANCHOR Init
   * @date 20/04/2025 - 12:59:49
   */
  const _init = () => {
    const nodes: LayoutStyleNodeInterface[] = [
      {
        id: 'Square',
        shape: <Square />,
      },
      {
        id: 'Circle',
        shape: <Circle />,
      },
      {
        id: 'Ellipse',
        shape: <Ellipse />,
      },
      {
        id: 'Trapezoid',
        shape: <Trapezoid />,
      },
      {
        id: 'Rectangle',
        shape: <Rectangle />,
      },
      {
        id: 'Rhombus',
        shape: <Rhombus />,
      },
    ];

    setNodes(nodes);
  };

  useEffect(() => {
    _init();
  }, []);

  // ANCHOR Render
  return (
    <Space direction="vertical" size={55}>
      <Flex gap="middle">
        <Flex>
          <Triangle
            title={t('Move Shape')}
            shapes={[LayoutStyleShapeTriangleEnum.Left]}
            onClick={_moveShapeLeft}
          />
        </Flex>
        <Flex>
          <Triangle
            title={t('Move Position')}
            shapes={[
              LayoutStyleShapeTriangleEnum.Top,
              LayoutStyleShapeTriangleEnum.Bottom,
            ]}
            onClick={_movePosition}
          />
        </Flex>
        <Flex>
          <Triangle
            title={t('Move Shape')}
            shapes={[LayoutStyleShapeTriangleEnum.Right]}
            onClick={_moveShapeRight}
          />
        </Flex>
      </Flex>
      <Row justify="center" gutter={[18, 18]}>
        <Col span={isInverted ? 2 : 6} />
        {nodes.map((node, index) => {
          return (
            <Fragment key={node.id}>
              <Col span={6}>
                <div onClick={_shuffle}>{node.shape}</div>
              </Col>
              {isInverted && index == 2 && (
                <>
                  <Col span={2} />
                  <Col span={6} />
                </>
              )}
            </Fragment>
          );
        })}
      </Row>
    </Space>
  );
};

export default Display;
