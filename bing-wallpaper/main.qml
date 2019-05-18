import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Layouts 1.3
import QtQuick.Controls 2.3
import QtQuick.Controls.Material 2.0

import "region.js" as Region
import "image-source.js" as ImageSource

Window {
    visible: true
    width: 320
    height: 480
    title: qsTr("Bing Wallpapers")

    property string currentRegion: Region.defaultRegion()
    property var renderableUrls: []

    RowLayout {
        id: btnbar
        spacing: 10
        anchors.top: parent.top
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.margins: 10

        ComboBox {
            id: regionList
            model: Region.getRegions()
            Layout.fillWidth: true

            onActivated: {
                currentRegion = Region.getRegionCode(currentText)
            }
        }

        Button {
            text: 'Fetch'
            onClicked: ImageSource.getModel(currentRegion, setRenderableUrls)

            function setRenderableUrls(value) {
                renderableUrls = value
            }
        }
    }

    ListView {
        Layout.fillHeight: true
        contentWidth: parent.width - 10

        spacing: 10
        model: renderableUrls

        anchors.top: btnbar.bottom
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.bottom: parent.bottom

        clip: true
        anchors.margins: 5
        cacheBuffer: 10000

        delegate: Image {
            width: parent.width
            asynchronous: true
            source: modelData.url
            fillMode: Image.PreserveAspectFit
            smooth: true
            mipmap: true

            property bool isHovering: false

            MouseArea {
                anchors.fill: parent
                hoverEnabled: true
                onEntered: { isHovering = true }
                onExited: { isHovering = false }
            }

            Row {
                visible: isHovering
                spacing: 10
                anchors.centerIn: parent

                Button {
                    text: "Apply"
                }

                Button {
                    text: "Download"
                }
            }
        }
    }
}
