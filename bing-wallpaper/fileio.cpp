#include "fileio.h"
#include <QFile>
#include <QNetworkReply>
#include <QUuid>

FileIO::FileIO(QObject *parent) : QObject(parent)
{
    manager = new QNetworkAccessManager(this);
    QObject::connect(
                manager,
                &QNetworkAccessManager::finished,
                this,
                &FileIO::saveFile
    );
}

FileIO::~FileIO()
{
    delete manager;
}

void FileIO::download(QString url, QString title, QJSValue callback)
{
    QNetworkRequest request(url);
    this->title = title.trimmed();
    this->callback = callback;
    manager->get(request);
}

void FileIO::saveFile(QNetworkReply *reply)
{
    QFile file(QStringLiteral("%1/Pictures/%2.jpg")
               .arg(QDir::homePath())
               .arg(title.isEmpty()
                    ? QUuid::createUuid().toString()
                    : title));
    file.open(QIODevice::WriteOnly);
    QByteArray contents = reply->readAll();
    file.write(contents);
    file.close();
    if (callback.isCallable()) {
        callback.call();
    }
}
