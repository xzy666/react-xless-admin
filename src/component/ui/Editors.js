import React, {Component} from 'react'
import {Row, Col, Card} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, convertToRaw, ContentState, convertFromRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import draftToMarkdown from 'draftjs-to-markdown';


const content = {
    "entityMap": {},
    "blocks": [{
        "key": "637gr",
        "text": "Initialized from content state.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }]
};

export default class Editors extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        contentState: convertFromRaw(content)
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            contentState: editorState,
        });
    };

    render() {

        const {editorState} = this.state;
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Row className={'editor'}>
                    <Col>
                        <Card border="false">
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="home-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Card border="false">
                            <pre>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</pre>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card border="false">
                            <pre>{JSON.stringify(this.state.contentState, null, 4)}</pre>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <pre>{editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}</pre>
                        </Card>
                    </Col>
                </Row>
                <style>
                    {`
                        .home-editor{
                            min-height:300px;
                        }
                    `}
                </style>
            </div>
        )
    }
}