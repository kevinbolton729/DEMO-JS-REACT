/*
 * @Author: Kevin Bolton
 * @Date: 2017-12-27 12:55:09
 * @Last Modified by: Kevin Bolton
 * @Last Modified time: 2018-06-11 20:34:54
 */
import { Icon, Spin } from 'antd';
import React from 'react';

export default (props) => {
  const { size = 'small', style = {}, type = 'loading', center = false, children } = props;
  const newStyle = Object.assign({}, { fontSize: 24 }, style);
  const newLoading = <Icon type="loading" style={newStyle} spin />;

  return type === 'default' ? (
    <Spin size={size} style={newStyle}>
      {children || (center && <i />)}
    </Spin>
  ) : (
    <Spin indicator={newLoading}>{children || (center && <i />)}</Spin>
  );
};
