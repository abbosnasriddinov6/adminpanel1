import React from 'react';
import { Flex, Spin } from 'antd';

const Loader: React.FC = () => (
    <Flex gap="small" vertical>
        <Flex gap="small">
            <div className='mt-20 ml-20 '>
                <Spin className='w-80' tip="Loading" size="large"></Spin>
            </div>
        </Flex>

    </Flex>
);

export default Loader;