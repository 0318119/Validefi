import { Tabs, Collapse } from 'antd';
import  '../css/tabs.css'
import 'antd/dist/antd.css';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Tab = () => (
  <div className="container-fluid Tabs">
    <div className="row tabs-row">
      <div className="col-lg-12 tabs-content">
    <Tabs defaultActiveKey="1" className='main-tabs'>

    <TabPane tab="Multi-Chain Live charting" key="1">
    <Collapse accordion className='tab-collapse'>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse> <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse> <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    
    </TabPane>
    <TabPane tab="Protfolio Tracker"  key="2">
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    </TabPane>
    <TabPane tab="NTF Platform" key="3">
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority 1" key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    <Collapse accordion>
    <Panel header="There are many variations of passages of Lorem Ipsum available, but the majority " key="1" className='tab-text'>
      <p className='tabs-content'>{text}</p>
    </Panel>
    </Collapse>
    </TabPane>
  </Tabs>
</div>
  </div>
  </div>
);

export default Tab