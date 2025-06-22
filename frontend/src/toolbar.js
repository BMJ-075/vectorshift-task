// toolbar.js

import { DraggableNode } from './draggableNode';
import { FaSignInAlt, FaBrain, FaSignOutAlt, FaFileAlt } from 'react-icons/fa';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' icon={FaSignInAlt} />
                <DraggableNode type='llm' label='LLM' icon={FaBrain} />
                <DraggableNode type='customOutput' label='Output' icon={FaSignOutAlt} />
                <DraggableNode type='text' label='Text' icon={FaFileAlt} />
            </div>
        </div>
    );
};
